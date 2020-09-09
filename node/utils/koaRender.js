// koa路由渲染
const koaRender = async ({ app, ctx, component, data }) => {
  const seoData = data || {};
  return app.render(ctx.req, ctx.res, component, {
    ...ctx.query,
    params: ctx.params,
    seo: {
      title: seoData.title || '',
      keywords: seoData.keywords || '',
      description: seoData.description || ''
    }
  });
};

module.exports = { koaRender };
