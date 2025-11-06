
const Koa = require("koa");
const app = new Koa();
const router = require("./router");
const { koaBody } = require("koa-body");

console.log('jiandande tiaozheng)

// app.use(async (ctx) => {
//   ctx.body = "Hello World";
// });
app.use(koaBody()).use(router.routes()).use(router.allowedMethods());

app.listen(3000);


console.log('test xiugai')
console.log('test xiugai2')



console.log('dasdasdas')
