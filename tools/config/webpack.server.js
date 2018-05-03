// webpack.client.js

import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals'
import CleanWebpackPlugin from 'clean-webpack-plugin';


const isDebug = true;
const reScript = /\.(js|jsx)$/;
const reGraphql = /\.(graphql|gql)$/;
const reStyle = /\.(css|less|styl|scss|sass|sss)$/;
const reImage = /\.(jpg|png|gif|svg|pdf|ico)$/;

export const serverConfig = () => {

    return {
        mode: process.env.MODE || 'development',
        watch: process.env.WATCH === "true" || true,
        entry: ['@babel/polyfill', process.env.SERVER_ENTRY || './src/server/index.js'],
        target: 'node',
        externals: [nodeExternals()],
        node: {
            __dirname: true
        },
        output: {
            path: path.resolve(__dirname, process.env.PUBLIC_URL || '../../public'),
            filename: 'server.js',
            publicPath: '/',
            chunkFilename: 'static/js/[name].js',
        },
        module: {
            rules: [
                {
                    test: reScript,
                    loader: require.resolve('babel-loader'),
                    options: {
                        cacheDirectory: true,
                        babelrc: false,
                        presets: [
                            [
                                '@babel/preset-env',
                            ],
                            '@babel/preset-stage-2',
                            // JSX
                            // https://github.com/babel/babel/tree/master/packages/babel-preset-react
                            ['@babel/preset-react', {development: isDebug}],
                        ],
                        plugins: [
                            ...(isDebug ? [] : ['@babel/transform-react-constant-elements']),
                            ...(isDebug ? [] : ['@babel/transform-react-inline-elements']),
                            ...(isDebug ? [] : ['transform-react-remove-prop-types']),
                            "dynamic-import-node"
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
                                emitFile: false,
                                useRelativePath: false,
                                name: '[name]-[hash:8].[ext]',
                                outputPath: '/static/media/',
                                publicPath: '/static/media/'
                            },
                        },
                    ]
                },
                {
                    test: reStyle, loader: 'ignore-loader',
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.__isBrowser__': false,
                __isBrowser__: "false",
                __DEV__: true,
                __SSR_FETCH__: process.env.SSR_FETCH,
                __PORT__: process.env.PORT || 3000,
                __ENDPOINT__: process.env.ENDPOINT || 'http://localhost:5001',
            }),
            // new CleanWebpackPlugin([process.env.PUBLIC_URL || '../../public']),
        ],
    }
}