const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

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
      rootValue: 37.5, // 换算的基数 默认100，作用 设计稿上元素宽375px,最终页面会换算成 10rem
      unitPrecision: 5,
      mediaQuery: false,
      minPixelValue: 0,
      selectorBlackList: [/^\.nop2r/, /^\.am/], // 排除antd样式
      // true忽略
      // exclude: file => {
      //   const excludeArr = [
      //     resolveApp('src/components/Pc'),
      //     resolveApp('src/components/Common'),
      //     resolveApp('src/components/Mobile/Foot'),
      //     resolveApp('src/components/Mobile/Head'),
      //     resolveApp('src/views/Pc'),
      //     'node_modules'
      //   ];
      //   return excludeArr.some(item => file.includes(item));
      // },
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
