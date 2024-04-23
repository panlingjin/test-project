const Router = require("koa-router");

const router = new Router();

router.get("/list", (ctx) => {
  console.log(ctx.request.query);

  ctx.body = {
    code: 200,
    data: "首页",
    message: "访问成功",
  };
});

router.post("/list1", (ctx) => {
  console.log(ctx.request.body);
  ctx.body = {
    code: 200,
    data: "首页1",
    message: "访问成功",
  };
});

module.exports = router;
