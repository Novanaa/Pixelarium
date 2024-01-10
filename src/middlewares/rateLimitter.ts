import { Request } from "express";
import rateLimit from "express-rate-limit";

/* The code is creating a rate limiter middleware using the `express-rate-limit` package. */
const rateLimitter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1min
  max: process.env.NODE_ENV == "production" ? 50 : 99999,
  message: {
    TypeError: "Rate Limit Exceeded Error",
    messege:
      "Too Many API request from this IP, please try again after 1 minutes.",
    status: "KO",
  },
  keyGenerator: (req: Request): string | Promise<string> => req.ip as string,
});

export default rateLimitter;
