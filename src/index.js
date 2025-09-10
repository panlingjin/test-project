
const Koa = require("koa");
const app = new Koa();
const router = require("./router");
const { koaBody } = require("koa-body");

// app.use(async (ctx) => {
//   ctx.body = "Hello World";
// });
app.use(koaBody()).use(router.routes()).use(router.allowedMethods());

app.listen(3000);



console.log('dasdasdas')
