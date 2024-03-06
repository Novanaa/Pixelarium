import { FastifyInstance } from "fastify";
import user from "@/app/user/controllers";

/**
 * This TypeScript function exports an asynchronous function that defines a route to retrieve a user by
 * name in a Fastify application.
 * @param {FastifyInstance} app - FastifyInstance
 */
export default async function userRoutes(app: FastifyInstance) {
  app.get("/:name", user.retrieveUser);
  app.delete("/:name", user.deleteUser);
  app.patch("/:name", user.updateUser);
}
