import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import client from "../../../../libs/configs/prisma";
import validateRequestIDParams from "../../../../utils/validateRequestIDParams";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import UserAlbums from "../interfaces/UserAlbums";
import getUserAlbum from "../services/getUserAlbum";
import deleteUserAlbumData from "../services/deleteUserAlbumData";
import FilesSystem from "../../../../services/FilesSystem";
import getPublicDirectoryPicturepath from "../../../../utils/getPublicDirectoryPicturepath";
import sendJsonResultHttpResponse from "../../../../services/sendJsonResultHttpResponse";

type DeleteUserAlbumResponseData = {
  owner: UserWithOptionalChaining;
  deleted_data: UserAlbums;
};

export default async function deleteUserAlbum(
  req: Request,
  res: Response
): Promise<void | Response> {
  const fs: FilesSystem = new FilesSystem();
  try {
    const { name, albumId } = req.params;

    const albumIdValidation: void | Response = validateRequestIDParams({
      id: albumId,
      response: res,
      errorMessege: "The album id must be a valid id!",
    });

    if (albumIdValidation) return;

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByNameOrEmail({ field: "name", value: name });

    if (!user) return httpNotFoundResponse({ response: res });

    delete user.email;
    delete user.password;

    const userAlbum: Awaited<UserAlbums | null> = await getUserAlbum(
      Number(albumId)
    );

    if (!userAlbum)
      return httpNotFoundResponse({
        response: res,
        errorMessage: "The album doesn't exist",
      });

    const dirpath: string = getPublicDirectoryPicturepath({
      usage: "albums",
      filename: "",
      name: user.name,
      albumName: userAlbum.title,
    });

    await deleteUserAlbumData(userAlbum.id);

    fs.deleteDirectory(dirpath);

    const responseData: DeleteUserAlbumResponseData = {
      owner: user,
      deleted_data: userAlbum,
    };

    return sendJsonResultHttpResponse({
      response: res,
      responseData,
      options: { resultKey: "deleted" },
    });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
