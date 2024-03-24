import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { ConfigModule } from "@nestjs/config";
import { WinstonModule } from "nest-winston";
import { FileSystemService } from "./file-system.service";
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
  providers: [PrismaService, FileSystemService],
  exports: [PrismaService, FileSystemService],
})
export class LibsModule {}
