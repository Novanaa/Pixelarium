import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { WinstonModule } from "nest-winston";
import * as libsProvider from "./providers";
import * as winston from "winston";

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    WinstonModule.forRoot({
      format: winston.format.cli(),
      transports: [new winston.transports.Console()],
    }),
  ],
  providers: [libsProvider.PrismaProvider, libsProvider.FileSystemProvider],
  exports: [libsProvider.PrismaProvider, libsProvider.FileSystemProvider],
})
export class LibsModule {}
