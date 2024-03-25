import { Prisma } from "@prisma/client";

export const prismaLogDefinition = [
  {
    emit: "event",
    level: "error",
  },
  {
    emit: "event",
    level: "info",
  },
  {
    emit: "event",
    level: "query",
  },
  {
    emit: "event",
    level: "warn",
  },
] satisfies Array<Prisma.LogDefinition | Prisma.LogLevel>;
