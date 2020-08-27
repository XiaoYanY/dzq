const postcssNormalize = require('postcss-normalize');
const postcssPxtorem = require('./build/postcssPxtorem');

module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    }),
    postcssPxtorem(),
    postcssNormalize()
  ]
};
