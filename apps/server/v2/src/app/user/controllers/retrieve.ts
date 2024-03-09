import { FastifyRequest, FastifyReply } from "fastify";
import logger from "@/libs/logger";
import prisma from "@/libs/prisma";
import error from "@/utils/error";
import http from "@/constant/code";
import { User } from "prisma/generated/client";
import getUserWithValidation, {
  GetUserWithValidation,
} from "@/services/user-validation";
import LogMessege from "@/utils/log";

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
  const log: LogMessege = new LogMessege("Retrieve User");
  try {
    const { name } = req.params as RetrieveUserRequestParams;

    const { user, error }: Awaited<GetUserWithValidation> =
      await getUserWithValidation(name);

    if (error) return rep.status(error.code).send(error);

    const responseData: RetrieveUserResponseData = { user, status: "OK" };

    await prisma.$disconnect();
    req.log.info(log.messege({ ip: req.ip, status: "Success" }));

    return rep.status(http.StatusOk).send(responseData);
  } catch (err) {
    logger.error(err);
    logger.info(log.messege({ ip: req.ip, status: "Internal Server Error" }));
    await prisma.$disconnect();

    return rep
      .status(http.StatusInternalServerError)
      .send(error.internalServerError());
  }
}
