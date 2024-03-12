import fs from "fs";
import Joi from "joi";
import path from "path";
import http from "@/constant/code";
import logger from "@/libs/logger";
import prisma from "@/libs/prisma";
import error from "@/utils/error";
import type File from "@/interfaces/file";
import LogMessege from "@/utils/log";
import { FastifyReply, FastifyRequest } from "fastify";
import getUserWithValidation, {
  GetUserWithValidation,
} from "@/services/user-validation";
import UpdateUserPayload from "../interfaces/update-user-payload";
import blankPayload from "@/utils/blank-payload";
import updateUserPayload from "../validations/update-user";
import prettifyPayloadError from "@/utils/prettify-payload-error";
import { getPublicAvatarDirectoryUrl } from "@/utils/public-directory-url";
import prettifyFilename from "@/utils/prettify-filename";
import { getAvatarDirectoryPath } from "@/utils/public-directory-path";
import invalidPicture from "@/utils/invalid-picture";
import updateUsernameValidation from "../services/update-username-validation";
import { ErrorResponse } from "@/utils/interfaces/error-response";
import updateUserAvatarValidation from "../services/update-user-avatar-validation";
import updateUserResponseData from "../services/update-user-response-data";
import UserWithOptionalChaining from "@/interfaces/user";

interface UpdateUserRequestParams {
  name: string;
}

export interface UpdateUserResponseData {
  updated_user: UserWithOptionalChaining;
  status: "OK";
}

/**
 * The function `updateUser` is an asynchronous function in TypeScript that handles updating user
 * information with error handling and validation checks.
 * @param {FastifyRequest} req - The `req` parameter in the `updateUser` function is of type
 * `FastifyRequest`, which represents the incoming request in a Fastify server. It contains information
 * about the HTTP request such as headers, parameters, body, and more.
 * @param {FastifyReply} rep - The `rep` parameter in the `updateUser` function is an instance of
 * `FastifyReply`, which is used to send responses back to the client in a Fastify server. It provides
 * methods like `send`, `status`, and others to handle the response logic.
 * @returns The `updateUser` function is returning a response based on the logic within the function.
 * Here is a summary of the possible return scenarios:
 */
export default async function updateUser(
  req: FastifyRequest,
  rep: FastifyReply
) {
  const log: LogMessege = new LogMessege("Update User");
  try {
    const { name } = req.params as UpdateUserRequestParams;
    const body: UpdateUserPayload = req.body as UpdateUserPayload;

    if (blankPayload<UpdateUserPayload>(body))
      return rep
        .status(http.StatusBadRequest)
        .send(
          error.badRequest(
            "The payload must be at least have one between bio, avatar, name, or email"
          )
        );

    const payload: Joi.ValidationResult<UpdateUserPayload> =
      updateUserPayload(body);
    const value: UpdateUserPayload = payload.value as UpdateUserPayload;
    const avatar: File = value.avatar as File;

    if (payload.error)
      return rep
        .status(http.StatusBadRequest)
        .send(error.badRequest(prettifyPayloadError(payload.error.message)));

    const { error: userNotFound, user }: Awaited<GetUserWithValidation> =
      await getUserWithValidation(name);

    if (userNotFound) return rep.status(userNotFound.code).send(userNotFound);

    if (value.name && value.name !== user.name) {
      const usernameValidationError: Awaited<ErrorResponse | void> =
        await updateUsernameValidation(value.name);

      if (usernameValidationError)
        return rep
          .status(usernameValidationError.code)
          .send(usernameValidationError);
    }

    if (avatar) {
      const extname: string = path.extname(avatar.name);
      const avatarName: string = prettifyFilename(user.name);
      const filename: string = avatarName.concat(extname);
      const baseAvatarPublicDirectoryUrl: string =
        getPublicAvatarDirectoryUrl(req);
      const avatarUrlpath: string =
        baseAvatarPublicDirectoryUrl.concat("/") + filename;
      const avatarDirectoryPath: string = getAvatarDirectoryPath(filename);
      const oldAvatarDirectoryPath: string = getAvatarDirectoryPath(
        path.basename(user.avatar)
      );

      const avatarValidation: ErrorResponse | void = updateUserAvatarValidation(
        { avatar, extname }
      );

      if (avatarValidation)
        return rep.status(avatarValidation.code).send(avatarValidation);

      avatar.mv(avatarDirectoryPath);

      if (await invalidPicture(avatarDirectoryPath))
        return rep
          .status(http.StatusForbidden)
          .send(
            error.forbidden(
              "Sorry, the picture file you uploaded appears to be corrupted and cannot be processed, this could be due to various reasons."
            )
          );

      if (
        user.avatar.includes(baseAvatarPublicDirectoryUrl) &&
        fs.existsSync(oldAvatarDirectoryPath)
      )
        fs.unlinkSync(oldAvatarDirectoryPath);

      const responseData: UpdateUserResponseData =
        (await updateUserResponseData({
          avatarUrlpath,
          payload: value,
          user,
        })) satisfies UpdateUserResponseData;

      req.log.info(log.messege({ ip: req.ip, status: "Success" }));

      return rep.status(http.StatusOk).send(responseData);
    }

    const responseData: Awaited<UpdateUserResponseData> =
      (await updateUserResponseData({
        avatarUrlpath: user.avatar,
        payload: value,
        user,
      })) satisfies UpdateUserResponseData;

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
