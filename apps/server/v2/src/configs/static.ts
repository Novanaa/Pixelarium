import { FastifyStaticOptions } from "@fastify/static";
import path from "path";

/* This code snippet is creating a configuration object `staticConfig` for serving static files using
Fastify, a web framework for Node.js. */
const staticConfig: FastifyStaticOptions = {
  root: path.resolve(__dirname, "../../public"),
};

export default staticConfig;
