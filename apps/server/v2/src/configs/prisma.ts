import { Prisma } from "../../prisma/generated/client";
import env from "@/configs/env";

/* This code snippet is defining a configuration object for the Prisma client in a TypeScript file. */
const prismaConfig: Prisma.PrismaClientOptions = {
  datasources: { db: { url: env.databaseUrl } },
};

export default prismaConfig;
