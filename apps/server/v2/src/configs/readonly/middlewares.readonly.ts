import * as moment from "moment";
import compression from "compression";
import { HttpStatus, Injectable } from "@nestjs/common";
import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";
import { Environment } from "./env.readonly";
import { Options } from "express-rate-limit";

@Injectable()
export class MiddlewaresConfigs {
  static readonly COMPRESSION_CONFIGS: compression.CompressionOptions = {
    level: 6,
    threshold: 10 * 1000,
    filter: (req: Request, res: Response) => {
      if (req.headers["x-no-compression"]) return false;

      return compression.filter(req, res);
    },
  } satisfies compression.CompressionOptions;

  static readonly CORS_CONFIGS: CorsOptions = {
    credentials: true,
    origin: Environment.CLIENT_HOSTNAME,
    optionsSuccessStatus: HttpStatus.OK,
  } satisfies CorsOptions;

  static readonly RATE_LIMIT_CONFIGS: Partial<Options> = {
    windowMs: 1 * 60 * 1000, // 1min
    max: Environment.NODEENV == "production" ? 5 : 99999,
    message: {
      TypeError: "Rate Limit Exceeded Error",
      messege:
        "Too Many API request from this IP, please try again after 1 minutes.",
      code: HttpStatus.TOO_MANY_REQUESTS,
      date: moment(new Date().getTime()).format("LLL"),
      status: "KO",
    },
  } satisfies Partial<Options>;
}
