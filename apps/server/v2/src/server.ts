import { FastifyInstance } from "fastify";

/**
 * The function `startServer` asynchronously starts a server using Fastify on port 8000 and handles any
 * errors that may occur.
 * @param {FastifyInstance} app - The `app` parameter in the `startServer` function is of type
 * `FastifyInstance`, which is likely an instance of the Fastify web framework. This function is
 * responsible for starting the server and listening on port 8000 for incoming requests. If any errors
 * occur during the server startup,
 */
export default async function startServer(app: FastifyInstance) {
  try {
    await app.listen({ port: 8000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}
