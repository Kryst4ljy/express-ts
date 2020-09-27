import express, { NextFunction, Request, Response } from "express";
const router = express.Router();

// 会员管理-会员列表
router.post(
  "/memberList",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      ret: 1,
      msg: "",
      content: {
        data: [
          {
            user_id: "28931944",
            user_name: "1031389150",
            tel_num: "",
            tel_status: "0",
            email: "",
            reg_type: "3",
            jh_app_id: "100005608",
            password_str: "cfmBQ8",
            device_id: "00000000-280b-5fca-0033-c5870033c587",
            register_time: "1600929732",
            status: "1",
            device_status: "1",
            jh_channel: "5f68111a240df517fa753118",
            ip: "182.246.62.32",
            idcard_time: null,
            appid: "100005608",
            appname: "新复古传奇（wzgd-hb-ks）",
            os: "android",
            wifiname: "ChinaNet-GJG",
            devicetype: "HUAWEI ELE-AL00",
            osversion: "10",
            status_info: "正常",
            tel_status_info: "未验证",
            reg_type_info: "手游注册",
            identify_status: "否",
            register_date: "2020-09-24 14:42:12",
            ipciry: "CN-Yunnan-Honghe",
            check_box:
              "<input name='freeze[]' type='checkbox' value='28931944'>",
          },
        ],
        total: 1,
      },
    });
  }
);
// 会员管理-主游戏查询列表
router.post(
  "/gameSearchList",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      ret: 1,
      msg: "",
      content: {
        data: [
          {
            id: "6302",
            appid: "100005869",
            appname: "火焰弹球",
            muc_id: "com.flame.pinball",
            os: "ios",
            comment: "",
            pid: "4542",
            delete_status: "0",
            percent_us: "0",
            percent_cp: "0",
            appstore_id: "",
            parent_name: "ios-2020小游戏",
            major_name: "ios-2020小游戏",
            os_remark: "",
            download_url: "",
          },
        ],
        total: 1,
      },
    });
  }
);
// 会员管理-IP封禁管理列表
router.post(
  "/ipBannedList",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      ret: 1,
      msg: "",
      content: {
        data: [
          {
            id: "6457",
            create_time: "2020-06-04 14:16:16",
            ip: "183.240.10.194",
            status: "已封禁",
          },
        ],
        total: 1,
      },
    });
  }
);
// 会员管理-登录记录列表
router.post(
  "/loginRecordList",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      ret: 1,
      msg: "",
      content: {
        data: [
          {
            user_id: "19428538",
            user_name: "1020948610",
            id: "30890662",
            login_time: "2020-09-24 16:30:29",
            appkey: "100003228",
            ip: "124.64.19.80",
            wifiname: "",
            devicetype: "iPhone10,2",
            osversion: "13.5.1",
            device_id: "CA08E3C9-EA75-4DFA-846F-4440045CE34A",
            appname: "荣耀至尊（wzgd工程包V36）",
            ipciry: "CN-Beijing-Beijing",
          },
        ],
        total: 1,
      },
    });
  }
);
// 会员管理-激活记录列表
router.post(
  "/activateRecordList",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      ret: 1,
      msg: "",
      content: {
        data: [
          {
            user_id: "9631566",
            user_name: "1010567489",
            id: 1,
            login_time: "2020-09-24 17:06:55",
            appkey: "100002220",
            ip: "126.161.71.142",
            wifiname: "<unknown ssid>",
            devicetype: "HUAWEI GLK-AL00",
            osversion: "10",
            device_id: "ffffffff-9f44-664a-0033-c5870033c587",
            appname: "毒液传奇（xcymy）",
            ipciry: "JP-Ibaraki-Tsukuba",
            time: "2020-09-24 17:06:55",
            type: 3,
            action: "登录",
          },
        ],
        total: 1,
      },
    });
  }
);
// 会员管理-角色查询列表
router.post(
  "/roleSearchList",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      ret: 1,
      msg: "",
      content: {
        data: [
          {
            id: "24994837",
            user_id: "28934138",
            appkey: "100004437",
            server_id: "5400058",
            server_name: "王者58区",
            role_id: "239090173",
            role_name: "シ噬血魅影",
            role_level: "",
            guild: "0",
            money: "0",
            create_time: "2020-09-24 17:14:29",
            update_time: "2020-09-24 17:14:29",
            appname: "王者国度（九游首发）",
            user_name: "1031391738",
          },
        ],
        total: 1,
      },
    });
  }
);
// 会员管理-自研游戏埋点列表
router.post(
  "/selfGameBasePointList",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      ret: 1,
      msg: "",
      content: {
        data: [
          {
            id: "24994837",
            appid: "100004437",
            action: "冲",
            login_time: "1999-02-02 12:00:00",
            ip: "127.0.0.1",
            ipciry: "JP-Ibaraki-Tsukuba",
            wifiname: "",
            devicetype: "",
            osversion: "10086",
          },
        ],
        total: 1,
      },
    });
  }
);
// 会员管理-账号冻结管理列表
router.post(
  "/bannedAccountList",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      ret: 1,
      msg: "",
      content: {
        data: [
          {
            reason: "拉人",
            freeze_time: "2020-09-24 17:37:30",
            user_id: "28933815",
            user_name: "1031391349",
            ip: "223.104.216.188",
            appname: "无双屠龙:合击（xryzz-微信）",
          },
        ],
        total: 1,
      },
    });
  }
);

export default router;
