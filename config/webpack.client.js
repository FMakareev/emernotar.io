/* global process */

import path from 'path';
import webpack from 'webpack';
import ManifestPlugin from 'webpack-manifest-plugin';
import WriteFileWebpackPlugin from 'write-file-webpack-plugin';
import {fileLoaderConfig} from './fileLoaderConfig'
export const browserConfigGenerator = () => {
    const isDebug = true;
    const reScript = /\.(js|jsx)$/;
    const reStyle = /\.(css|less|styl|scss|sass|sss)$/;
    const reImage = /\.(jpg|png|gif|svg|pdf|ico)$/;
    const reGraphql = /\.(graphql|gql)$/;
    console.log('process.cwd(): ',process.cwd());
    return {
        mode: process.env.MODE || 'development',
        watch: process.env.WATCH === 'true',
        name: 'client',
        entry: [
            '@babel/polyfill',
            // 'react-hot-loader/patch',
            process.env.CLIENT_ENTRY || './src/client/index.js',
        ],
        output: {
            path: path.resolve(__dirname,process.env.PUBLIC_URL || '../public'),
            publicPath: '/',
            filename: 'bundle.js',
            chunkFilename: 'assets/js/[name].js',
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
                            [ '@babel/preset-env' ],
                            // Experimental ECMAScript proposals
                            // https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-
                            '@babel/preset-stage-2',
                            // JSX
                            // https://github.com/babel/babel/tree/master/packages/babel-preset-react
                            [
                                '@babel/preset-react',
                                // {development: isDebug}
                            ],
                        ],
                        plugins: [
                            // Treat React JSX elements as value types and hoist them to the highest scope
                            // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-constant-elements
                            ...(isDebug ? [] : [ '@babel/transform-react-constant-elements' ]),
                            // Replaces the React.createElement function with one that is more optimized for production
                            // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-inline-elements
                            ...(isDebug ? [] : [ '@babel/transform-react-inline-elements' ]),
                            // Remove unnecessary React propTypes from the production build
                            // https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types
                            ...(isDebug ? [] : [ 'transform-react-remove-prop-types' ]),
                            'syntax-dynamic-import',
                        ],
                    },
                },
                // Rules for GraphQL
                {
                    test: reGraphql,
                    exclude: /node_modules/,
                    loader: 'graphql-tag/loader',
                },
                fileLoaderConfig,
                {
                    test: reStyle,
                    use: [ {loader: 'style-loader'},{loader: 'css-loader'} ],
                },
            ],
        },
        plugins: [
            new WriteFileWebpackPlugin(),
            new webpack.DefinePlugin({
                isBrowser: 'true',
                DEV: true,
                SSR_FETCH: process.env.SSR_FETCH,
                PORT: process.env.PORT || 3000,
                ENDPOINT_CLIENT: process.env.ENDPOINT_CLIENT || "'http://localhost:5001'",
                ENDPOINT_SERVER: process.env.ENDPOINT_SERVER || "'http://localhost:5001'",
            }),
            // new CleanWebpackPlugin([ process.env.PUBLIC_URL || '../../public']),
            new webpack.HotModuleReplacementPlugin(),
            new ManifestPlugin({
                fileName: 'asset-manifest.json',
            }),
        ],
        stats: {
            cached: false,
            cachedAssets: false,
            chunks: false,
            chunkModules: false,
            colors: true,
            hash: false,
            modules: false,
            reasons: false,
            timings: true,
            version: false,
        },
    };
};

export default browserConfigGenerator;
