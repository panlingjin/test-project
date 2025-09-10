const user = require("./user");
const home = require("./home");
const algorithm = require("./algorithm");
const Router = require("koa-router");

const router = new Router();

router.use("/home", home.routes());
router.use("/user", user.routes());
router.use("/algorithm", algorithm.routes());

module.exports = router;


console.log('dsadasdas')