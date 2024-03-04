import { RateLimitPluginOptions } from "@fastify/rate-limit";
import maxWindowMs from "../constant/max-window-ms";
import http from "../constant/code";

/* This code snippet is defining a rate limiting configuration object named `rateLimitConfig`. It is of
type `RateLimitOptions` which is imported from `@fastify/rate-limit` module. */
const rateLimitConfig: RateLimitPluginOptions = {
  max: maxWindowMs,
  keyGenerator: (req) => req.ip,
  errorResponseBuilder: (_, ctx) => ({
    statusCode: http.StatusTooManyRequests,
    TypeError: "Too Many Requests",
    message: `I only allow ${ctx.max} requests per ${ctx.after} to this Website. Try again soon.`,
    date: Date.now(),
    expiresIn: ctx.ttl,
  }),
};

export default rateLimitConfig;
