import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";
import env from "./env";
import http from "@/constant/http-code";

export default {
  credentials: true,
  origin: env.clientHostname,
  optionsSuccessStatus: http.StatusOk,
} satisfies CorsOptions;
