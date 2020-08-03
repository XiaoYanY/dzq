module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    }),
    require('postcss-pxtorem')({
      rootValue: 16,
      unitPrecision: 5,
      mediaQuery: false,
      minPixelValue: 0,
      selectorBlackList: [/^\.nop2r/, /^\.am/], // 排除antd样式
      propList: [
        '*background*',
        '*padding*',
        '*margin*',
        'letter-spacing',
        '*width',
        'left',
        'font*',
        'right',
        'top',
        'bottom'
      ]
    })
  ]
};
