import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";
import env from "./env";
import { HttpStatus } from "@nestjs/common";

export default {
  credentials: true,
  origin: env.clientHostname,
  optionsSuccessStatus: HttpStatus.OK,
} satisfies CorsOptions;
