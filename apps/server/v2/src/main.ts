/* These import statements in the TypeScript code are importing various modules or functions from the
"hono" package or modules within the "hono" package. Here's a breakdown of what each import
statement is doing: */
import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";
import { prettyJSON } from "hono/pretty-json";
import { cors } from "hono/cors";
import { secureHeaders } from "hono/secure-headers";

/* `const app = new Hono();` is creating a new instance of the `Hono` class. This instance `app` is then
being configured with various middleware functions using the `app.use()` method to handle logging,
serving static files, formatting JSON output, compressing responses, and enabling CORS (Cross-Origin
Resource Sharing) using the `cors` middleware with options defined in `corsOptions`. */
const app = new Hono();

/* These lines of code are configuring the `app` instance of the `Hono` class with various middleware
functions to handle different aspects of the application: */
app.use(logger());
app.use(serveStatic({ path: "public/*" }));
app.use(prettyJSON());
app.use(cors(corsOptions));
app.use(secureHeaders());

import corsOptions from "@/configs/cors";

export default {
  port: 8000,
  fetch: app.fetch,
};
