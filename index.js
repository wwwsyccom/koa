const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const bodyParser = require('koa-bodyparser')
const  serve = require("koa-static");

app.use(bodyParser())

async function logger(ctx, next) {
  const startDate = new Date();
  console.log("ctx.url="+ctx.url);
  next();
  console.log(`method: ${ctx.method} code: ${ctx.status} time:${new Date() -startDate}ms`);
}
app.use(logger);
app.use(serve(__dirname+ "/static/"));

app
  .use(router.routes())
  .use(router.allowedMethods())


app.listen(3333)