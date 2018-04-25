import path from 'path';
import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';


const isDebug = true;
const reScript = /\.(js|jsx)$/;
const reStyle = /\.(css|less|styl|scss|sass|sss)$/;
const reImage = /\.(jpg|png|gif|svg|pdf|ico)$/;
const reGraphql = /\.(graphql|gql)$/;

export const browserConfig = () => {

    return {
        mode: process.env.MODE || 'development',
        watch: process.env.WATCH === "true",
        entry: ['@babel/polyfill', process.env.CLIENT_ENTRY || './src/client/index.js'],
        output: {
            path: path.resolve(__dirname, process.env.PUBLIC_URL || '../../public'),
            publicPath: '/',
            filename: 'bundle.js',
            chunkFilename: 'static/js/[name].js',
        },
        module: {
            rules: [
                {
                    test: reScript,
                    loader: require.resolve('babel-loader'),
                    options: {
                        // https://github.com/babel/babel-loader#options
                        cacheDirectory: isDebug,

                        // https://babeljs.io/docs/usage/options/
                        babelrc: false,
                        presets: [
                            // A Babel preset that can automatically determine the Babel plugins and polyfills
                            // https://github.com/babel/babel-preset-env
                            [
                                '@babel/preset-env',
                            ],
                            // Experimental ECMAScript proposals
                            // https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-
                            '@babel/preset-stage-2',

                            // JSX
                            // https://github.com/babel/babel/tree/master/packages/babel-preset-react
                            ['@babel/preset-react', {development: isDebug}],
                        ],
                        plugins: [
                            // Treat React JSX elements as value types and hoist them to the highest scope
                            // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-constant-elements
                            ...(isDebug ? [] : ['@babel/transform-react-constant-elements']),
                            // Replaces the React.createElement function with one that is more optimized for production
                            // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-inline-elements
                            ...(isDebug ? [] : ['@babel/transform-react-inline-elements']),
                            // Remove unnecessary React propTypes from the production build
                            // https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types
                            ...(isDebug ? [] : ['transform-react-remove-prop-types']),
                            "syntax-dynamic-import"
                        ],
                    }

                },
                // Rules for GraphQL
                {
                    test: reGraphql,
                    exclude: /node_modules/,
                    loader: 'graphql-tag/loader',
                },
                {
                    test: reImage,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                emitFile: true,
                                useRelativePath: false,
                                name: '[name]-[hash:8].[ext]',
                                outputPath: '/static/media/',
                                publicPath: '/static/media/'
                            },
                        },
                    ]
                },
                {
                    test: reStyle,
                    use: [
                        {loader: "style-loader"},
                        {loader: "css-loader"}
                    ]
                }

            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.__isBrowser__': true,
                __isBrowser__: "true",
                __DEV__: true,
                __SSR_FETCH__: process.env.SSR_FETCH,
                __PORT__: process.env.PORT || 3000,
                __ENDPOINT__: process.env.ENDPOINT || 'http://localhost:5001',
            }),
            // new CleanWebpackPlugin([ process.env.PUBLIC_URL || '../../public']),

            new ManifestPlugin({
                fileName: 'asset-manifest.json',
            }),
        ],
    };
}