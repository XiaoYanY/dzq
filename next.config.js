const withPlugins = require('next-compose-plugins');
const withStylus = require('@zeit/next-stylus');
const withCss = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const withTM = require('next-transpile-modules');
const cssLoaderGetLocalIdent = require('css-loader/lib/getLocalIdent');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const { INIT_ENV } = process.env;
const { plugins } = require('./build/webpack.common');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './src/pages/antd-custom.less'),
    'utf8'
  )
);

const nextConfig = {
  distDir: 'dist',
  env: {
    INIT_ENV
  },
  webpack: (config, { buildId, deve, isServer, defaultLoaders }) => {
    // if (isServer) {
    //   const antStyles = /antd\/.*?\/style.*?/;
    //   const origExternals = [...config.externals];
    //   config.externals = [
    //     (context, request, callback) => {
    //       if (request.match(antStyles)) return callback();
    //       if (typeof origExternals[0] === 'function') {
    //         origExternals[0](context, request, callback);
    //       } else {
    //         callback();
    //       }
    //     },
    //     ...(typeof origExternals[0] === 'function' ? [] : origExternals)
    //   ];
    //   config.module.rules.unshift({
    //     test: antStyles,
    //     use: 'null-loader'
    //   });
    // }
    config.plugins.push(...plugins);
    return config;
  }
};

module.exports = withPlugins([withStylus, withCss, withLess, withTM], {
  cssModules: true,
  camelCase: true,
  transpileModules: ['antd', 'antd-mobile'],
  lessLoaderOptions: {
    modifyVars: themeVariables, // make your antd custom effective
    javascriptEnabled: true
  },
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
  },
  ...nextConfig
});
