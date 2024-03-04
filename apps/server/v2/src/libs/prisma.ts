import { PrismaClient } from "../../prisma/generated/client";
import prismaConfig from "../configs/prisma";

/* This line of code is creating a new instance of the `PrismaClient` class and assigning it to the
constant variable `prisma`. The `PrismaClient` class is provided by the Prisma ORM library and is
used to interact with the database. The `new PrismaClient(prismaConfig)` part is initializing the
`PrismaClient` instance with the configuration provided in the `prismaConfig` object. This allows
you to use the `prisma` instance to perform database operations using Prisma in your TypeScript
code. */
const prisma: PrismaClient = new PrismaClient(prismaConfig);

export default prisma;
