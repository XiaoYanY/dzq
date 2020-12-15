## v1.0.1

1. 升级 next 到 10 版本，全面支持 react17 版本。
2. 重构 request 请求（safeRequest 方法），让请求层更在独立性灵活性，基于业务层判断请求逻辑全在 services 层中处理
3. 增加 node 层静态目录功能（koa-static），默认指向 public 目录
4. 升级 http-proxy-middleware 插件，语法替换成 createProxyMiddleware
5. 替换 koa-router 插件，升级成最新版本@koa/router，并且语法有所变动，全局匹配使用'(.\*)'
6. 调整优化部份 demo 页面案例
7. 添加 官方组件 images 使用案例，内置图像 domains 配置（img.kaikeba.com）
