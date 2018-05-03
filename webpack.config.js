// webpack.config.js

// var path = require('path');
import path from 'path';
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

var ROOT_DIR = path.resolve(__dirname, '..');
var resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);
var SRC_DIR = resolvePath('src');

var isDebug = true;

var reStyle = /\.(css|less|styl|scss|sass|sss)$/;
var optimization = {
    splitChunks: {
        chunks: "all",
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'all'
            }
        }
    }
}

var script = {
    test: /\.(js)$/,
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
            "loadable-components/babel",
            "syntax-dynamic-import"
        ],
    }

}

var file_loader = {
    test: /\.(jpg|png|gif|svg|pdf|ico)$/,
    use: [
        {
            loader: 'file-loader',
            options: {
                emitFile: false,
                useRelativePath: true,
                name: 'static/media/[name]-[hash:8].[ext]'
            },
        },
    ]
};

// create base64
var url_loader = {
    test: /\.(pdf|jpg|png|gif|svg|ico)$/,
    use: [
        {
            loader: 'url-loader'
        },
    ]
};

var style = {
    test: /\.css$/,
    use: [
        {loader: "style-loader"},
        {loader: "css-loader"}
    ]
}


var config = {
    mode: 'development',


}


var browserConfig = {
    mode: 'development',
    entry: ['@babel/polyfill', './src/browser/index.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        chunkFilename: 'static/js/[name].js',
    },
    module: {
        rules: [
            script,
            file_loader,
            style
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "true"
        }),
        new CleanWebpackPlugin(['public']),
        new ManifestPlugin({
            fileName: 'asset-manifest.json',
        }),
    ],
}

var serverConfig = {
    mode: 'development',
    entry: ['@babel/polyfill', './src/server/index.js'],
    target: 'node',
    externals: [nodeExternals()],
    node: {
        __dirname: true
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'server.js',
        chunkFilename: 'static/js/[name].js',
    },
    // optimization: optimization,
    module: {
        rules: [
            {
                test: /\.(js)$/,
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
                        "loadable-components/babel",
                        "dynamic-import-node"
                    ],
                }

            },
            file_loader,
            {test: /\.css$/, loader: 'ignore-loader'}

        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "false"
        }),
    ],
}

module.exports = [browserConfig, serverConfig];