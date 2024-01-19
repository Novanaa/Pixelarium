import { PrismaClient } from "../../../generated/client";
import { DATABASE_URL } from "../../const/env";

/* The code is creating a new instance of the PrismaClient class and assigning it to the `client`
constant. */
const client = new PrismaClient({
  datasources: { db: { url: DATABASE_URL } },
});

export default client;
