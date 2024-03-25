import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
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
  implements OnModuleInit
{
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {
    super({
      log: prismaLogDefinition,
    });
  }

  onModuleInit() {
    this.$on("info", (e) => this.logger.info(e));
    this.$on("error", (e) => this.logger.error(e));
    this.$on("warn", (e) => this.logger.warn(e));
    this.$on("query", (e) => this.logger.info(e));
  }
}
