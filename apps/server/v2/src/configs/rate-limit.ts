import http from "@/constant/http-code";
import { Options } from "express-rate-limit";
import * as moment from "moment";
import env from "./env";

export default {
  windowMs: 1 * 60 * 1000, // 1min
  max: env.nodeEnv == "production" ? 5 : 99999,
  message: {
    TypeError: "Rate Limit Exceeded Error",
    messege:
      "Too Many API request from this IP, please try again after 1 minutes.",
    code: http.StatusTooManyRequests,
    date: moment(new Date().getTime()).format("LLL"),
    status: "KO",
  },
} satisfies Partial<Options>;
