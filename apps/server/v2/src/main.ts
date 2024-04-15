import { join } from "path";
import startServer from "./server";
import { AppModule } from "./app.module";
import rateLimit from "express-rate-limit";
import { NestFactory } from "@nestjs/core";
import * as compression from "compression";
import * as cookieParser from "cookie-parser";
import { NestExpressApplication } from "@nestjs/platform-express";
import { Environment, MiddlewaresConfigs } from "./configs";

async function bootstrap() {
  const app: NestExpressApplication =
    await NestFactory.create<NestExpressApplication>(AppModule);

  const staticAssestDirpath: string = join(__dirname, "..", "public");

  app.enableShutdownHooks();
  app.useStaticAssets(staticAssestDirpath);
  app.useBodyParser("json");
  app.enableCors(MiddlewaresConfigs.CORS_CONFIGS);
  app.use(compression(MiddlewaresConfigs.COMPRESSION_CONFIGS));
  app.use(cookieParser(Environment.JSONWEBTOKEN.ACCESS_TOKEN));
  app.use(rateLimit(MiddlewaresConfigs.RATE_LIMIT_CONFIGS));
  app.set("trust proxy", 1);

  await startServer(app);
}

bootstrap();
