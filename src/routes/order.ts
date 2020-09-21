import express, { NextFunction, Request, Response } from "express";
const router = express.Router();

// 订单管理列表-未完成
router.post("/orderList", function (req, res, next) {
  res.send({
    ret: 1,
    msg: "",
    total: 1,
    rows: [
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
  });
});

export default router;
