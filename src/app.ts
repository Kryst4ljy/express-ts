// 第三方模块
import bodyParser from "body-parser";
import express from "express";
import path from "path";
import { NextFunction, Request, Response } from "express"; // express 申明文件定义的类型
import { systemConfig } from "./config"; // 自定义模块

import indexRoute from "./routes/index";
import orderRoute from "./routes/order";

const app = express();

app.all("*", (req: Request, res: Response, next) => {
  //设为指定的域
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials");
  res.header("X-Powered-By", " 3.2.1");
  next();
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// 处理 post 请求的请求体，限制大小最多为 20 兆
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(bodyParser.json({ limit: "20mb" }));

app.use("/", indexRoute);
app.use("/order", orderRoute);

// error handler
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  return res.sendStatus(500);
});

app.listen(systemConfig.port, function () {
  console.log(`the server is start at port ${systemConfig.port}`);
});

export default app;
