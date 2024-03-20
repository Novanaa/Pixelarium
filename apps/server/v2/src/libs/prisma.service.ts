import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "prisma/generated/client";

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
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
