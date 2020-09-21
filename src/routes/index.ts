import express, { NextFunction, Request, Response } from "express";
const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send({
    ret: 1,
    msg: "HELLO WORLD",
    total: 0,
    rows: [],
  });
});

export default router;
