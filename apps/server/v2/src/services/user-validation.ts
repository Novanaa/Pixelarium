import getUser from "@/app/user/services/get-user";
import http from "@/constant/code";
import prisma from "@/libs/prisma";
import error from "@/utils/error";
import LogMessege from "@/utils/log";
import { FastifyReply, FastifyRequest } from "fastify";
import { User } from "prisma/generated/client";

interface GetUserWithValidationParams {
  username: string;
  request: FastifyRequest;
  reply: FastifyReply;
  logInstance: LogMessege;
}

/**
 * This TypeScript function retrieves a user with validation checks and error handling.
 * @param {GetUserWithValidationParams}  - The `getUserWithValidation` function is an asynchronous
 * function that takes in an object with the following parameters:
 * @returns the user object if it exists. If the user does not exist, it will disconnect from the
 * Prisma database, log a message with the IP address and status "Not Found", and then send a 404 Not
 * Found response with an error message stating that the user doesn't exist.
 */
export default async function getUserWithValidation({
  username,
  reply,
  request,
  logInstance,
}: GetUserWithValidationParams): Promise<User> {
  const user: Awaited<User | null> = await getUser(username);

  if (!user) {
    await prisma.$disconnect();
    request.log.info(
      logInstance.messege({ ip: request.ip, status: "Not Found" })
    );

    return reply
      .status(http.StatusNotFound)
      .send(
        error.notFound(
          "The user was doesn't exist, please try again with another account!"
        )
      );
  }

  return user;
}
