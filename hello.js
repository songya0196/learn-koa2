// 初始化 package.json
// npm init
// 安装 koa
// npm install koa

const Koa = require("koa");
const app = new Koa();

app.use(async ctx => {
  // 页面显示
  ctx.body = "hello koa2";
});

app.listen(3000);
// 控制台输出
console.log("[demo] start-quick is starting at port 3000");
