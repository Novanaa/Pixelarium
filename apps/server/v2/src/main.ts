import Fastify, { FastifyInstance } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { fastifyStatic } from "@fastify/static";
import { fastifyCookie } from "@fastify/cookie";
import { fastifyMultipart } from "@fastify/multipart";
import { fastifyCompress } from "@fastify/compress";
import { fastifyRateLimit } from "@fastify/rate-limit";

/* This line of code is creating an instance of the Fastify server by calling the `Fastify` function
with the `appConfig` as an argument. The `FastifyInstance` type is used to define the type of the
`app` variable as an instance of the Fastify server. */
const app: FastifyInstance = Fastify(appConfig);

import startServer from "./server";
import appConfig from "@/configs";
import corsConfig from "@/configs/cors";
import staticConfig from "@/configs/static";
import rateLimitConfig from "@/configs/rate-limit";
import prefix from "./configs/prefix";

/* These lines of code are registering various Fastify plugins with the Fastify server instance
(`app`). Here's a breakdown of each registration: */
app.register(fastifyRateLimit, rateLimitConfig);
app.register(fastifyCors, corsConfig);
app.register(fastifyStatic, staticConfig);
app.register(fastifyCookie);
app.register(fastifyMultipart);
app.register(fastifyCompress);

/* The line `app.register(import("@/app/user/routes"));` is registering routes for the user-related
functionality of the application. */
app.register(import("@/app/user/routes"), prefix("user"));

/* `await startServer(app);` is calling the `startServer` function with the `app` instance as an
argument and using the `await` keyword to wait for the function to complete its execution before
moving on to the next line of code. This allows the server to start up and be ready to handle
incoming requests before any further operations are performed. */
await startServer(app);

export default app;
