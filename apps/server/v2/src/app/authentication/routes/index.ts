import { FastifyInstance } from "fastify";
import auth from "../controllers";

export default async function authenticationRoutes(app: FastifyInstance) {
  app.post("/logout", auth.logout);
  app.get("/tokenizer", auth.tokenizer);
}
