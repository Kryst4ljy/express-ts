import express, { NextFunction, Request, Response } from "express";
const router = express.Router();

// 订单管理-订单管理列表
router.post("/orderList", (req: Request, res: Response, next: NextFunction) => {
  res.send({
    ret: 1,
    msg: "",
    content: {
      data: [
        {
          id: "53513069",
          order_sn: "2020091745578161458",
          cp_trade_sn: "2020091714190354710362101393brz1",
          user_id: "27294299",
          money: "30.00",
          pay_status: "0",
          status: "1",
          create_time: "2020-09-17 14:19:06",
          update_time: "2020-09-17 14:19:06",
          game_role_id: "5f1fd10e9da3f33e85bd",
          game_role_name: "醉灬熬灬",
          server: "30146",
          game_id: "100005034",
          goods_id: "2020091714190354710362101393brz1",
          pay_type: 26,
          goods_name: "命签礼包-第三档",
          pay_time: null,
          jh_channel: "5f101ad3240df50e92454f32",
          payment_trade_sn: "",
          appname: "妖仙传（fzfs-yyb-286）",
          os: "android",
          user_name: "wxj19871118",
          pay_name: "微信官方支付",
          pay_status_zh: "未支付",
          status_zh: "未下发",
        },
      ],
      total: 1,
    },
  });
});
// 订单管理-支付渠道列表
router.get(
  "/orderNameList",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      ret: 1,
      msg: "",
      content: {
        data: {
          1: { text: "支付宝", status: "Success" },
          2: { text: "微信支付", status: "Success" },
        },
        total: 1,
      },
    });
  }
);
// 订单管理-订单统计列表
router.post(
  "/censusList",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      ret: 1,
      msg: "",
      content: {
        data: {
          list: [
            {
              money: "0.23",
              times: "22",
              appid: "100000001",
              pay_name: "支付宝",
              gameName: "android-android测试",
            },
            {
              money: "0.22",
              times: "22",
              appid: "100000001",
              pay_name: "支付宝",
              gameName: "android-android测试",
            },
            {
              money: "0.22",
              times: "22",
              appid: "100000001",
              pay_name: "支付宝",
              gameName: "android-android测试",
            },
            {
              money: "0.22",
              times: "22",
              appid: "100000001",
              pay_name: "支付宝",
              gameName: "android-android测试",
            },
            {
              money: "0.22",
              times: "22",
              appid: "100000001",
              pay_name: "支付宝",
              gameName: "android-android测试",
            },
            {
              money: "0.22",
              times: "22",
              appid: "100000001",
              pay_name: "支付宝",
              gameName: "android-android测试",
            },
            {
              money: "0.22",
              times: "22",
              appid: "100000001",
              pay_name: "支付宝",
              gameName: "android-android测试",
            },
            {
              money: "0.22",
              times: "22",
              appid: "100000001",
              pay_name: "支付宝",
              gameName: "android-android测试",
            },
            {
              money: "0.22",
              times: "22",
              appid: "100000001",
              pay_name: "支付宝",
              gameName: "android-android测试",
            },
          ],
          footer: [
            { money: "82559530.02", times: "1171982", pay_name: "总计:" },
          ],
        },
        total: 1,
      },
    });
  }
);
// 订单管理-会员订单统计列表
router.post(
  "/memberOrderList",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      ret: 1,
      msg: "",
      content: {
        data: [
          {
            id: "53819539",
            order_sn: "2020092348643261248",
            cp_trade_sn: "yue160084717640950",
            user_id: "28912761",
            money: "10.00",
            pay_status: "1",
            status: "4",
            create_time: "2020-09-23 15:46:18",
            update_time: "2020-09-23 15:46:24",
            game_role_id: "33595070",
            game_role_name: "錵调蝶逝",
            server: "29",
            game_id: "100005135",
            goods_id: "0===1",
            pay_type: "26",
            goods_name: "充值10元",
            pay_time: "2020-09-23 15:46:24",
            jh_channel: "5f6ac8be240df54d4a0553c6",
            payment_trade_sn: "4200000676202009233574560405",
            appname: "超变私服（cylj-头条）",
            os: "android",
            user_name: "1031366414",
            pay_name: "微信官方支付",
            pay_status_zh: "支付成功",
            status_zh: "下发成功",
          },
        ],
        total: 1,
      },
    });
  }
);
// 订单管理-会员订单统计数量
router.post(
  "/memberOrderCount",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      ret: 1,
      msg: "",
      content: {
        data: [
          {
            user_id: "28912761",
            money: "10.00",
            times: "1",
            totalMoney: "40.00",
            beginDate: "2020-09-23",
            endDate: "2020-09-23",
          },
        ],
        total: 1,
      },
    });
  }
);
// 订单管理-代币订单管理列表
router.post(
  "/tokenOrderList",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      ret: 1,
      msg: "",
      content: {
        data: [
          {
            order_sn: "2020092448992350526",
            payment_trade_sn: "2020092422001491111457465443",
            pay_name: "支付宝",
            user_id: "23226370",
            user_name: "65386237",
            game_role_id: "880805177",
            game_role_name: "战魂殿ア世玉",
            server: "1100001",
            coin: "500.00",
            money: "500.00",
            pay_status: "1",
            create_time: "2020-09-24 08:03:03",
            pay_time: "2020-09-24 08:03:19",
            update_time: "2020-09-24 08:03:19",
            appname: "爆装雷霆（wzgd工程包v46-官方包）",
          },
        ],
        total: 1,
      },
    });
  }
);
// 订单管理-代币订单管理总数
router.post(
  "/tokenOrderCount",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      ret: 1,
      msg: "",
      content: {
        data: [
          {
            money: "512.00",
            count: "2",
            start_date: "2020-09-24",
            end_date: "2020-09-24",
          },
        ],
        total: 1,
      },
    });
  }
);
// 订单管理-官方包充值列表
router.post(
  "/officialPakectList",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      ret: 1,
      msg: "",
      content: {
        data: {
          list: [
            {
              census_date: "2020-09-24",
              appname: "爆装雷霆（wzgd工程包v46-官方包）",
              register_user: "0",
              login_user: "21",
              coin_money: "512",
              inner_money: "0",
              coin_user: "2",
              inner_user: "0",
              new_coin_user: "0",
              coin_consume: "234",
              coin_consume_user: "3",
              old_coin_user: "2",
              history_coin_user: "0",
              pay_user: "2",
              inner_money_percent: "0%",
              inner_user_percent: "0%",
            },
          ],
          footer: [
            {
              appname: "爆装雷霆（wzgd工程包v46-官方包）",
              register_user: "0",
              login_user: "21",
              coin_money: "512",
              inner_money: "0",
              coin_user: "2",
              inner_user: "0",
              coin_consume: "234",
              coin_consume_user: "3",
              census_date: "总计",
            },
          ],
        },
        total: 1,
      },
    });
  }
);

export default router;
