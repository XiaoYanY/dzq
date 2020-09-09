const routeData = [
  {
    path: '/',
    // redirect: '/', // 跳转到指定的path路由
    component: '/home', // 声明此组件，将不判断是否显示h5/pc组件
    // componentPc: '', // pc页面
    // componentH5: '', // h5页面
    // seo参数tdk
    title: '测试1', // 标题
    keywords: '关键', // 描述
    description: '2212323'
  },
  {
    path: '/check',
    component: '/check',
    title: '',
    keywords: '',
    description: ''
  },
  {
    path: '/a',
    component: '/a',
    title: 'a标题',
    keywords: 'a关键字',
    description: 'a描述'
  },
  {
    path: '/b/:id',
    component: '/b',
    title: 'b标题',
    keywords: 'b关键字',
    description: 'b描述'
  }
];

module.exports = { routeData };
