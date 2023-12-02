import { PrismaClient } from "../../../generated/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { DATABASE_URL } from "../../const/env";

const client = new PrismaClient({
  datasources: { db: { url: DATABASE_URL } },
}).$extends(withAccelerate());

export default client;
