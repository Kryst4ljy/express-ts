import express, { NextFunction, Request, Response } from "express";
const router = express.Router();

// 数据对比-通用接口
router.post(
  "/commonList",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      ret: 1,
      msg: "",
      content: {
        data: [
          {
            appname: "总计",
            os: "ios",
            days0ago: "1898748.03",
            days1ago: "2167965.07",
            days2ago: "1806868.11",
            days3ago: "1874259.27",
            days4ago: "1889280.68",
          },
          {
            appname: "百龙霸业（放置三国wt个人签）",
            os: "ios",
            days0ago: "5633.00",
            days1ago: "14820.00",
            days2ago: "10336.00",
            days3ago: "7965.00",
            days4ago: "13606.00",
            appid: "100004435",
            sort: "999",
          },
          {
            appname: "百龙霸业（放置三国wt个人签）",
            os: "ios",
            days0ago: null,
            days1ago: null,
            days2ago: null,
            days3ago: null,
            days4ago: null,
            appid: "100004435",
            sort: "999",
          },
          {
            appname: "百龙霸业（放置三国wt个人签）",
            os: "ios",
            days0ago: null,
            days1ago: null,
            days2ago: null,
            days3ago: null,
            days4ago: null,
            appid: "100004435",
            sort: "999",
          },
        ],
        total: 1,
      },
    });
  }
);

export default router;
