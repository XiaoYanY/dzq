const withPlugins = require('next-compose-plugins');
const withStylus = require('@zeit/next-stylus');
const withCss = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const withTM = require('next-transpile-modules');
const cssLoaderGetLocalIdent = require('css-loader/lib/getLocalIdent.js');

const dev = process.env.NODE_ENV !== 'production';
const { plugins } = require('./build/webpack.common');

const localIdentName = dev ? '[local]-[hash:base64:5]' : '[hash:base64:5]';

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

const nextConfig = {
  distDir: 'dist',
  webpack: (config, { buildId, deve, isServer, defaultLoaders }) => {
    config.plugins.push(...plugins);
    return config;
  }
};

module.exports = withPlugins(
  [withTM, withStylus, withCss, withLess],
  {
    cssModules: true,
    camelCase: true,
    transpileModules: ['antd', 'antd-mobile'],
    cssLoaderOptions: {
      localIdentName: '[local]___[hash:base64:5]',
      getLocalIdent: (context, localIdentNames, localName, options) => {
        let hz = context.resourcePath.replace(context.rootContext, '');
        if (/node_modules/.test(hz)) {
          return localName;
        }
        return cssLoaderGetLocalIdent(
          context,
          localIdentNames,
          localName,
          options
        );
      }
    },
    postcssLoaderOptions: {
      // parser: 'sugarss',
      config: {
        ctx: {
          theme: JSON.stringify(process.env.REACT_APP_THEME)
        }
      }
    }
  },
  nextConfig
);
