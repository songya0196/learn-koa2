/**
 * async/await 封装使用 mysql
 */
// mysql模块的操作是异步操作，每次操作的结果是在回调函数中执行
// 可以用async/await，以同步的写法去操作数据库

// Promise 封装 mysql模块, 即 ./async-db
const mysql = require("mysql");
const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "learn_koa2"
});
let query = function(sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};
module.exports = { query };

/**
 * async/await 使用
 */
const { query } = require("./async-db");
async function selectAllData() {
  let sql = "SELECT * FROM my_table";
  let dataList = await query(sql);
  return dataList;
}
async function getData() {
  let dataList = await selectAllData();
  console.log(dataList);
}
getData();
