import fs from "fs";
import path from "path";
import logger from "@/libs/logger";
import prisma from "@/libs/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import error from "@/utils/error";
import LogMessege from "@/utils/log";
import http from "@/constant/code";
import { User } from "prisma/generated/client";
import deleteUserData from "../services/delete-user";
import { getPublicAvatarDirectoryUrl } from "@/utils/public-directory-url";
import { getAvatarDirectoryPath } from "@/utils/public-directory-path";
import getUserWithValidation, {
  GetUserWithValidation,
} from "@/services/user-validation";

interface DeleteUserRequestParams {
  name: string;
}

interface DeleteUserResponseData {
  deleted_user: User;
  status: "OK";
}

/**
 * The function `deleteUser` deletes a user, including their data and avatar, and handles errors
 * appropriately.
 * @param {FastifyRequest} req - The `req` parameter in the `deleteUser` function is of type
 * `FastifyRequest`, which represents the incoming request in a Fastify server. It contains information
 * about the HTTP request such as headers, parameters, body, etc., and allows you to interact with the
 * request data.
 * @param {FastifyReply} rep - The `rep` parameter in the `deleteUser` function is a reference to the
 * FastifyReply object, which is used to send responses back to the client making the request. It
 * provides methods like `send` and `status` to send the response with the appropriate status code and
 * data.
 * @returns a response with status "OK" and data containing the deleted user information. If an error
 * occurs, it will return a response with status code 500 (Internal Server Error) and an error message.
 */
export default async function deleteUser(
  req: FastifyRequest,
  rep: FastifyReply
) {
  const log: LogMessege = new LogMessege("Delete User");
  try {
    const { name } = req.params as DeleteUserRequestParams;

    const { user, error }: Awaited<GetUserWithValidation> =
      await getUserWithValidation(name);

    if (error) return rep.status(error.code).send(error);

    await deleteUserData(name);

    const userAvatar: string = user.avatar;
    const avatarPublicDirectoryUrl: string = getPublicAvatarDirectoryUrl(req);

    if (userAvatar.includes(avatarPublicDirectoryUrl)) {
      const filename: string = path.basename(userAvatar);
      const avatarDirectoryPath: string = getAvatarDirectoryPath(filename);

      if (fs.existsSync(avatarDirectoryPath))
        fs.unlinkSync(avatarDirectoryPath);
    }

    const responseData: DeleteUserResponseData = {
      deleted_user: user,
      status: "OK",
    };

    await prisma.$disconnect();
    req.log.info(log.messege({ ip: req.ip, status: "Success" }));

    return rep.status(http.StatusOk).send(responseData);
  } catch (err) {
    await prisma.$disconnect();
    logger.error(err);
    logger.info(log.messege({ ip: req.ip, status: "Internal Server Error" }));

    return rep
      .status(http.StatusInternalServerError)
      .send(error.internalServerError());
  }
}
