import env from "@/configs/env";
import { FastifyCorsOptions } from "@fastify/cors";

/* This code snippet is defining a variable `corsOptions` of type `FastifyCorsOptions` which is used
for configuring CORS (Cross-Origin Resource Sharing) settings in a Fastify server. Here's a
breakdown of the properties being set in `corsOptions`: */
const corsOptions: FastifyCorsOptions = {
  credentials: true,
  origin: env.clientHostname!,
  optionsSuccessStatus: 200,
};

export default corsOptions;
