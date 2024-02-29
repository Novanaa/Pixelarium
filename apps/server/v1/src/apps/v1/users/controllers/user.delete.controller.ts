import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import client from "../../../../libs/configs/prisma";
import FilesSystem from "../../../../services/FilesSystem";
import { User } from "../../../../../packages/prisma/generated/client";
import checkIfPictureIsInternalPicture from "../../../../utils/checkIfPictureIsInternalPicture";
import getFilename from "../../../../utils/getFilename";
import getPictureFilepath from "../../../../utils/getPictureFilepath";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import { jsonResult } from "../../../../utils/responses/httpApiResponses";
import http from "../../../../const/readonly/httpStatusCode";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";

export default async function deleteUser(
  req: Request,
  res: Response
): Promise<void | Response> {
  const filesSystem = new FilesSystem();
  try {
    const { name } = req.params;

    const user: Awaited<User | null> = await isUserExistByNameOrEmail({
      value: name,
      field: "name",
    });

    if (!user) return httpNotFoundResponse({ response: res });

    const picture: string = user.picture;
    const isInternalPicture: boolean | null = checkIfPictureIsInternalPicture({
      picturePath: picture,
      usage: "users",
    });

    if (isInternalPicture) {
      const pictureFilePath: string = getPictureFilepath({ usage: "users" });
      const fileName: string | null = getFilename(picture);
      const filePath: string = `./public/${pictureFilePath}/${fileName}`;

      filesSystem.deleteFile(filePath);
    }

    const responseData: UserWithOptionalChaining = { ...user };

    delete responseData.email;

    delete responseData.password;

    await client.user.delete({
      where: { name },
    });

    return jsonResult({
      statusCode: http.StatusOk,
      resultKey: "deleted",
      dataKey: "deletedUser",
      response: res,
      data: responseData,
    });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
