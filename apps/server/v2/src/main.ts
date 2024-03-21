import { join } from "path";
import env from "./configs/env";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as compression from "compression";
import { NestExpressApplication } from "@nestjs/platform-express";
import { default as corsConfig } from "@/configs/cors";
import * as compressionConfig from "@/configs/compression";
import * as cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import rateLimitConfig from "@/configs/rate-limit";
import { WINSTON_MODULE_NEST_PROVIDER } from "nest-winston";

async function bootstrap() {
  const app: NestExpressApplication =
    await NestFactory.create<NestExpressApplication>(AppModule);

  const staticAssestDirpath: string = join(__dirname, "..", "public");

  app.useStaticAssets(staticAssestDirpath);
  app.useBodyParser("json");
  app.enableCors(corsConfig);
  app.use(compression(compressionConfig));
  app.use(cookieParser(env.jsonWebToken.accessToken));
  app.use(rateLimit(rateLimitConfig));
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  app.set("trust proxy", 1);

  await app.listen(env.port);
}

bootstrap();
