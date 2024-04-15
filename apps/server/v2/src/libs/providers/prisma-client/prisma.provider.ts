import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";
import { prismaLogDefinition } from "./prisma.config";

/**
 * PrismaService class extends the PrismaClient class and implements the OnModuleInit interface.
 * It is used as a service for connecting to the database using Prisma.
 *
 * @remarks
 * This class provides methods for connecting to the database, executing raw queries, and performing CRUD operations on various models.
 *
 * @example
 * ```typescript
 * const prismaService = new PrismaService();
 * await prismaService.$connect();
 * ```
 */
@Injectable()
export class PrismaProvider
  extends PrismaClient<Prisma.PrismaClientOptions, string>
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: prismaLogDefinition,
    });
  }

  private readonly logger = new Logger("PrismaClient");

  async onModuleDestroy() {
    this.logger.log("Disconnected database connection from prisma client");
    await this.$disconnect();
  }

  onModuleInit() {
    this.$on("info", (e) => this.logger.log(e.message));
    this.$on("error", (e) => this.logger.error(e.message));
    this.$on("warn", (e) => this.logger.warn(e.message));
    this.$on("query", (e) => this.logger.log(e.timestamp));
  }
}
