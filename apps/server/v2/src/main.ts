import Fastify, { FastifyInstance } from "fastify";

/* This line of code is creating an instance of the Fastify server by calling the `Fastify` function
with the `appConfig` as an argument. The `FastifyInstance` type is used to define the type of the
`app` variable as an instance of the Fastify server. */
const app: FastifyInstance = Fastify(appConfig);

import startServer from "./server";
import appConfig from "@/configs";

/* `await startServer(app);` is calling the `startServer` function with the `app` instance as an
argument and using the `await` keyword to wait for the function to complete its execution before
moving on to the next line of code. This allows the server to start up and be ready to handle
incoming requests before any further operations are performed. */
await startServer(app);

export default app;
