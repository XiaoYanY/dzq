const withPlugins = require('next-compose-plugins');
const stylus = require('@zeit/next-stylus');
const css = require('@zeit/next-css');
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
  [
    // [
    //   withTM,
    //   {
    //     transpileModules: ['@kkb/daji']
    //   }
    // ],
    [
      stylus,
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName
        },
        postcssLoaderOptions: {
          // parser: 'sugarss',
          config: {
            ctx: {
              theme: JSON.stringify(process.env.REACT_APP_THEME)
            }
          }
        }
      }
    ],
    [
      css,
      {
        cssModules: true,
        transpileModules: ['antd'],
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
        }
      }
    ]
  ],
  nextConfig
);
