/*
 * @Author: starkwang
 * @Contact me: https://shudong.wang/about
 * @Date: 2019-11-21 15:25:24
 * @LastEditors: starkwang
 * @LastEditTime: 2019-11-27 18:30:56
 * @Description: file content
 */
const Koa = require('koa');
const next = require('next');
const Sentry = require('@sentry/node');
const static = require('koa-static');
const path = require('path');
const dev = process.env.NODE_ENV === 'development';
const app = next({ dev });

const router = require('./node/routes')(app);
const server = new Koa();
// const handler = routes.getRequestHandler(app);
const port = process.env.PORT || 6020;
Sentry.init({
  dsn: ''
});

// 配置静态资源
const staticPath = '/public';
server.use(static(path.join(__dirname, staticPath)));

app.prepare().then(() => {
  server.use(async (ctx, nxt) => {
    ctx.res.statusCode = 200;
    await nxt();
  });
  server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
