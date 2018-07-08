const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const bodyParser = require('koa-bodyparser')
const  serve = require("koa-static");
app.use(serve(__dirname+ "/static/"));

app.use(bodyParser())

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3333)