/* global process */
import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import WriteFileWebpackPlugin from 'write-file-webpack-plugin';
import {fileLoaderConfig} from "./fileLoaderConfig";

export const serverConfigGenerator = () => {
    const isDebug = true;
    const reScript = /\.(js|jsx)$/;
    const reGraphql = /\.(graphql|gql)$/;
    const reStyle = /\.(css|less|styl|scss|sass|sss)$/;
    const reImage = /\.(jpg|png|gif|svg|pdf|ico)$/;

    return {
        name: 'server',
        mode: process.env.MODE || 'development',
        watch: process.env.WATCH === 'true' || true,
        entry: [ '@babel/polyfill',process.env.SERVER_ENTRY || './src/server/index.js' ],
        target: 'node',
        externals: [ nodeExternals() ],
        node: {
            __dirname: true,
        },
        output: {
            path: path.resolve(__dirname,process.env.PUBLIC_URL || '../public'),
            filename: 'server.js',
            publicPath: '/',
            chunkFilename: 'assets/js/[name].js',
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
                            [ '@babel/preset-env' ],
                            '@babel/preset-stage-2',
                            // JSX
                            // https://github.com/babel/babel/tree/master/packages/babel-preset-react
                            [ '@babel/preset-react',{development: isDebug} ],
                        ],
                        plugins: [
                            ...(isDebug ? [] : [ '@babel/transform-react-constant-elements' ]),
                            ...(isDebug ? [] : [ '@babel/transform-react-inline-elements' ]),
                            ...(isDebug ? [] : [ 'transform-react-remove-prop-types' ]),
                            'dynamic-import-node',
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
                    loader: 'ignore-loader',
                },
            ],
        },
        plugins: [
            new WriteFileWebpackPlugin(),
            new webpack.DefinePlugin({
                isBrowser: false,
                DEV: true,
                SSR_FETCH: process.env.SSR_FETCH,
                PORT: process.env.PORT || 3000,
                ENDPOINT_CLIENT: process.env.ENDPOINT_CLIENT || "'http://localhost:5001'",
                ENDPOINT_SERVER: process.env.ENDPOINT_SERVER || "'http://localhost:5001'",
            }),

            new webpack.HotModuleReplacementPlugin(),
        ],
    };
};

export default serverConfigGenerator;
