import express, { NextFunction, Request, Response } from "express";
const router = express.Router();

// 异常处理-订单异常列表
router.post(
  "/exceptionOrderList",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      ret: 1,
      msg: "",
      content: {
        data: [
          {
            id: "53513069",
            order_sn: "2020091745578161458",
            cp_trade_sn: "2020091714190354710362101393brz1",
            appname: "妖仙传（fzfs-yyb-286）",
            os: "android",
            user_id: "27294299",
            user_name: "wxj19871118",
            money: "30.00",
            pay_name_type: "",
            pay_status_zh: "未支付",
            status_zh: "未下发",
            create_time: "2020-09-17 14:19:06",
            update_time: "2020-09-17 14:19:06",
          },
        ],
        total: 1,
      },
    });
  }
);
// 异常处理-注册异常列表
router.post(
  "/exceptionRegList",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      ret: 1,
      msg: "",
      content: {
        data: [
          {
            user_id: "4265541",
            comment:
              "从2018-11-27 16:22:17到2018-11-27 16:30:03时间段内，超过5分钟没有注册",
            create_time: "2018-11-27 16:30:03",
            user_name: "1004825155",
            register_time: "2018-11-27 16:22:17",
          },
        ],
        total: 1,
      },
    });
  }
);
// 异常处理-内购异常金额设置列表
router.post(
  "/innerpaymaxmoneyList",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      ret: 1,
      msg: "",
      content: {
        data: [
          {
            id: "1",
            appkey: "100000302",
            money: "60",
            pay_type: "22",
            last_warn_date: "2019-01-30 00:00:00",
            pay_times: "1",
            last_unpaid_warn_date: "2019-01-30 10:51:02",
            appname: "YSDK DEMO",
            pay_name: "应用宝支付",
            status: "关闭",
          },
        ],
        total: 1,
      },
    });
  }
);
// 异常处理-通知人列表通用接口
router.post(
  "/exceptionManCommon",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      ret: 1,
      msg: "",
      content: {
        data: [
          {
            id: "52",
            name: "蒋商羽",
            mobile: "15397122960",
            department: "主播",
          },
        ],
        total: 1,
      },
    });
  }
);

export default router;
