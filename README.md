# 基于express和ts的服务端小项目

一个基于express和ts的服务端小项目，接口返回均为代码写死，并无连接数据库。

### 使用

1. 下载代码：

```
git clone git@github.com:Kryst4ljy/express-ts.git
```

2. 安装依赖

```
npm i
```

3. 启动服务

```
npm run dev 
```

### 核心代码

```
const app = express();

app.all("*", (req: Request, res: Response, next) => {
  //设为指定的域
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
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
app.use("/member", memberRoute);
app.use("/exception", exceptionRoute);
app.use("/compare", compareRoute);

// error handler
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  return res.sendStatus(500);
});

app.listen(systemConfig.port, function () {
  console.log(`the server is start at port ${systemConfig.port}`);
});
```
