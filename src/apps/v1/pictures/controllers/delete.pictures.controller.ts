import slugify from "slugify";
import { Request, Response } from "express";
import client from "../../../../libs/configs/prisma";
import logger from "../../../../libs/configs/logger";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import getUserGallery, {
  UserGallery,
} from "../../galleries/services/getUserGallery";
import removesAllPictures from "../services/removesAllPictures";
import FilesSystem from "../../../../services/FilesSystem";
import getPublicDirectoryPicturepath from "../../../../utils/getPublicDirectoryPicturepath";
import { jsonResult } from "../../../../utils/responses/httpApiResponses";
import http from "../../../../const/readonly/httpStatusCode";
import { GetBatchResult } from "@prisma/client/runtime/library";

type DeleteAllUserPicturesResponseData = {
  from: UserWithOptionalChaining;
  total_deleted: number;
};
export async function deleteAllUserPictures(req: Request, res: Response) {
  const fs: FilesSystem = new FilesSystem();
  try {
    const { name } = req.params;

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByNameOrEmail({ field: "name", value: name });

    if (!user) return httpNotFoundResponse({ response: res });

    const slugifiedUsername: string = slugify(user.name, { lower: true });

    delete user.email;
    delete user.password;

    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user.id
    );

    if (!userGallery.pictures.length)
      return httpNotFoundResponse({
        response: res,
        errorMessage: "Your Gallery Pictures Directory Was Empty!",
      });

    const userGalleryPicturesUniquekey: Array<string> =
      userGallery.pictures.map((g) => g.uniquekey);

    const dirpath: string = getPublicDirectoryPicturepath({
      usage: "galleries",
      filename: "",
      name: slugifiedUsername,
    });

    await fs.deleteDirectoryFiles(dirpath);

    const deletedPictures: Awaited<GetBatchResult> = await removesAllPictures(
      userGalleryPicturesUniquekey
    );

    const responseData: DeleteAllUserPicturesResponseData = {
      from: user,
      total_deleted: deletedPictures.count,
    };

    return jsonResult<DeleteAllUserPicturesResponseData>({
      response: res,
      dataKey: "data",
      resultKey: "deleted",
      statusCode: http.StatusOk,
      data: responseData,
    });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
