import { FastifyRequest, FastifyReply } from "fastify";
import logger from "@/libs/logger";
import prisma from "@/libs/prisma";
import error from "utils/error";
import http from "@/constant/code";
import getUser from "../services/get-user";
import { User } from "prisma/generated/client";

interface RetrieveUserRequestParams {
  name: string;
}

interface RetrieveUserResponseData {
  user: User;
  status: "OK";
}

/**
 * This TypeScript function retrieves user data based on the provided username and handles errors
 * appropriately.
 * @param {FastifyRequest} req - The `req` parameter in the `retrieveUser` function is of type
 * `FastifyRequest`, which represents the incoming request object in a Fastify server. It contains
 * information about the HTTP request made to the server, such as headers, parameters, body, etc. You
 * can access specific data from
 * @param {FastifyReply} rep - The `rep` parameter in the `retrieveUser` function is an object
 * representing the FastifyReply instance. It is used to send responses back to the client making the
 * request. In the provided code snippet, `rep` is used to set the HTTP status code and send the
 * response data back to
 * @returns The `retrieveUser` function is returning either the user data if found, with a status code
 * of 200, or an internal server error response if an error occurs during the process.
 */
export default async function retrieveUser(
  req: FastifyRequest,
  rep: FastifyReply
) {
  try {
    const { name } = req.params as RetrieveUserRequestParams;

    const user: Awaited<User | null> = await getUser(name);

    if (!user) {
      await prisma.$disconnect();
      const log: string = `${req.ip} - Not Found: Requested user data with username => ${name}`;
      req.log.info(log);

      return rep.status(http.StatusNotFound).send(error.notFound());
    }

    const responseData: RetrieveUserResponseData = { user, status: "OK" };

    await prisma.$disconnect();
    const log: string = `${req.ip} - Success: Requested user data with username => ${name}`;
    req.log.info(log);

    return rep.status(http.StatusOk).send(responseData);
  } catch (err) {
    logger.error(err);
    await prisma.$disconnect();

    return rep
      .status(http.StatusInternalServerError)
      .send(error.internalServerError());
  }
}
