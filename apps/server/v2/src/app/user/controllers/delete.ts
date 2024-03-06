import fs from "fs";
import path from "path";
import logger from "@/libs/logger";
import prisma from "@/libs/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import error from "utils/error";
import LogMessege from "utils/log";
import http from "@/constant/code";
import { User } from "prisma/generated/client";
import getUser from "../services/get-user";
import deleteUserData from "../services/delete-user";
import { getPublicAvatarDirectoryUrl } from "utils/public-directory-url";
import { getAvatarDirectoryPath } from "utils/public-directory-path";

interface DeleteUserRequestParams {
  name: string;
}

interface DeleteUserResponseData {
  deleted_user: User;
  status: "OK";
}

export default async function deleteUser(
  req: FastifyRequest,
  rep: FastifyReply
) {
  const log: LogMessege = new LogMessege("Delete User");
  try {
    const { name } = req.params as DeleteUserRequestParams;

    const user: Awaited<User | null> = await getUser(name);

    if (!user) {
      await prisma.$disconnect();
      req.log.info(log.messege({ req, status: "Not Found" }));

      return rep
        .status(http.StatusNotFound)
        .send(error.notFound("The user was doesn't exist!"));
    }

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
    req.log.info(log.messege({ req, status: "Success" }));

    return rep.status(http.StatusOk).send(responseData);
  } catch (err) {
    await prisma.$disconnect();
    logger.error(err);
    logger.info(log.messege({ req, status: "Internal Server Error" }));

    return rep
      .status(http.StatusInternalServerError)
      .send(error.internalServerError());
  }
}
