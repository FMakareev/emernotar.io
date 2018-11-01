/* global process */

import path from 'path';
import webpack from 'webpack';
import ManifestPlugin from 'webpack-manifest-plugin';
import WriteFileWebpackPlugin from 'write-file-webpack-plugin';
import { fileLoaderConfig } from './fileLoaderConfig'
import { scriptsLoaderConfig } from "./scriptsLoaderConfig";
import { graphqlLoaderConfig } from "./graphqlLoaderConfig";
import styleLoaderConfig from "./styleLoaderConfig";

export const browserConfigGenerator = () => {

	return {
		mode: process.env.NODE_ENV || 'development',
		watch: process.env.WATCH === 'true',
		name: 'client',
		entry: [
			process.env.CLIENT_ENTRY || './src/client/index.js',
		],
		output: {
			path: path.resolve(__dirname, process.env.PUBLIC_URL || '../public'),
			publicPath: '/',
			filename: 'bundle.js',
			chunkFilename: 'assets/js/[name].js',
		},
		module: {
			rules: [
				scriptsLoaderConfig(['@babel/plugin-syntax-dynamic-import']),
				// Rules for GraphQL
				graphqlLoaderConfig,
				fileLoaderConfig,
				styleLoaderConfig,
			],
		},
		plugins: [
			new WriteFileWebpackPlugin(),
			new webpack.DefinePlugin({
				isBrowser: 'true',
				DEV: process.env.NODE_ENV === 'development',
				SSR_FETCH: true,
				PORT: process.env.PORT || 3000,
				ENDPOINT_CLIENT: process.env.ENDPOINT_CLIENT || "",
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
