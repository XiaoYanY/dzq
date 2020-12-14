// koa路由渲染
const koaRender = ({ app, ctx, component, data }) => {
  const seoData = data || {};
  ctx.req.seoData = seoData;
  ctx.req.params = ctx.params;

  return app.render(ctx.req, ctx.res, component, ctx.query);
};

module.exports = { koaRender };
