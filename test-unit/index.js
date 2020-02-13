// npm install --save-dev mocha chai supertest
/**
 * mocha 模块是测试框架
 * chai 模块是用来进行测试结果断言库，比如一个判断 1 + 1 是否等于 2
 * supertest 模块是http请求测试库，用来请求API接口
 */

const Koa = require("koa");
const app = new Koa();

const server = async (ctx, next) => {
  let result = {
    success: true,
    data: null
  };

  if (ctx.method === "GET") {
    if (ctx.url === "/getString.json") {
      result.data = "this is string data";
    } else if (ctx.url === "/getNumber.json") {
      result.data = 123456;
    } else {
      result.success = false;
    }
    ctx.body = result;
    next && next();
  } else if (ctx.method === "POST") {
    if (ctx.url === "/postData.json") {
      result.data = "ok";
    } else {
      result.success = false;
    }
    ctx.body = result;
    next && next();
  } else {
    ctx.body = "hello world";
    next && next();
  }
};

app.use(server);

module.exports = app;

app.listen(3000, () => {
  console.log("[demo] test-unit is starting at port 3000");
});
