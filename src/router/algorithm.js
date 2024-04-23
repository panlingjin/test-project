const Router = require("koa-router");
const { homeList } = require("../data/home");

const router = new Router();

router.post("/list", (ctx) => {
  ctx.body = {
    code: 200,
    data: homeList,
    message: "访问成功",
  };
});

module.exports = router;
