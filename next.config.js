const withPlugins = require('next-compose-plugins');
const withStylus = require('@zeit/next-stylus');
const withCss = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const withTM = require('next-transpile-modules');
const cssLoaderGetLocalIdent = require('css-loader/lib/getLocalIdent');

const dev = process.env.NODE_ENV !== 'production';

const { plugins } = require('./build/webpack.common');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

const nextConfig = {
  distDir: 'dist',
  webpack: (config, { buildId, deve, isServer, defaultLoaders }) => {
    // if (config.externals) {
    //   const includes = [/antd|antd-mobile/];
    //   config.externals = config.externals.map(external => {
    //     if (typeof external !== 'function') return external;
    //     return (ctx, req, cb) => {
    //       return includes.find(include =>
    //         req.startsWith('.')
    //           ? include.test(path.resolve(ctx, req))
    //           : include.test(req)
    //       )
    //         ? cb()
    //         : external(ctx, req, cb);
    //     };
    //   });
    // }
    if (isServer) {
      // 为true使用在服务端, 为false使用在客户端
      const antStyles = /antd\/.*?\/style.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals)
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader'
      });
    }
    config.plugins.push(...plugins);
    return config;
  }
};

module.exports = withPlugins(
  [withStylus, withCss, withLess, withTM],
  {
    cssModules: true,
    camelCase: true,
    transpileModules: ['antd', 'antd-mobile'],
    lessLoaderOptions: {
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
    }
  },
  nextConfig
);
