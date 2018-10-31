/* global process */

/**
 * @param {array} plugins - array plugins
 *
 * */
export const scriptsLoaderConfig = (plugins = []) => {
  return {
    test: /\.(js|jsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      cacheDirectory: true,
      babelrc: false,
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
      plugins: [

        '@babel/plugin-proposal-class-properties',
        ...plugins,
      ],
    },
  };
};

export default scriptsLoaderConfig;
