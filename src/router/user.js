const Router = require("koa-router");

const router = new Router();

router.get("/list", (ctx) => {
  ctx.body = {
    code: 200,
    data: {},
    message: "访问成功",
  };
});

module.exports = router;
