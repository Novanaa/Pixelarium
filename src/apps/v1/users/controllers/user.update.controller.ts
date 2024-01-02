import logger from "../../../../libs/configs/logger";
import client from "../../../../libs/configs/prisma";
import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import userValidation from "../../../../validations/userValidation";
import validateRequestBody from "../../../../utils/validateRequestBody";
import { User } from "../../../../../generated/client";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import checkIfUsernameHasBeenTaken from "../../../../utils/checkIfUsernameHasBeenTaken";
import type TUserValidation from "../interfaces/types/UserValidationTypes";
import updateUserData from "../services/updateUserData";
import validateImagesUpload from "../../../../utils/validateImagesUpload";
import saveFile from "../../../../utils/saveFile";
import getPictureUrlpath from "../../../../utils/getPictureUrlpath";
import createHashedFilename from "../../../../utils/createHashedFilename";
import checkIfPictureIsInternalPicture from "../../../../utils/checkIfPictureIsInternalPicture";
import FilesSystem from "../../../../services/FilesSystem";
import getPublicDirectoryPicturepath from "../../../../utils/getPublicDirectoryPicturepath";
import validateRequestFilesField from "../../../../utils/validateRequestFilesField";
import getLatestUserProfilePicture from "../services/getLatestUserProfilePicture";
import getFilename from "../../../../utils/getFilename";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
  httpUnprocessableContentResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import { jsonResult } from "../../../../utils/responses/httpApiResponses";
import http from "../../../../const/readonly/httpStatusCode";
import type { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import requestFileFieldName from "../../../../const/readonly/requestFileFieldName";

export default async function updateUser(
  req: Request,
  res: Response
): Promise<void | Response> {
  const filesSystem: FilesSystem = new FilesSystem();
  try {
    const { name } = req.params;

    const { error, value } = userValidation<TUserValidation>({
      payload: req.body,
    });

    const validateResult: void | Response = validateRequestBody({
      res,
      value,
      error,
      usage: "update",
    });

    if (validateResult) return;

    const user: Awaited<User | null> = await isUserExistByNameOrEmail({
      field: "name",
      value: name,
    });

    if (!user) return httpNotFoundResponse({ response: res });

    const keys: string[] = Object.keys(value);
    if (keys.includes("name")) {
      const isUsernameTaken: Awaited<string | boolean> =
        await checkIfUsernameHasBeenTaken(value.name);

      if (isUsernameTaken)
        return httpUnprocessableContentResponse({
          response: res,
          errorMessage: "The name is already taken",
        });
    }

    if (!req.files) {
      await updateUserData({ name, data: value });
    }

    if (req.files) {
      const picture: UploadedFile = req.files.picture as UploadedFile;

      const validateFieldResult: void | Response = validateRequestFilesField({
        request: req,
        response: res,
        field: requestFileFieldName,
      });

      if (validateFieldResult) return;

      const validateImagesresult: void | Response = validateImagesUpload({
        file: picture,
        response: res,
      });

      if (validateImagesresult) return;

      const filename: string = createHashedFilename({ file: picture });
      const pathname: string = getPublicDirectoryPicturepath({
        usage: "users",
        filename,
      });
      const urlpath: string = getPictureUrlpath({
        request: req,
        filename,
        usage: "users",
      });

      saveFile({ file: picture, path: pathname, response: res });

      const isInternalPicture: boolean | null = checkIfPictureIsInternalPicture(
        { usage: "users", picturePath: pathname }
      );

      if (isInternalPicture) {
        const latestUserPictureProfile: Awaited<string | null | undefined> =
          await getLatestUserProfilePicture(String(user.id));

        const latestUserPictureProfileFilename: string | null = getFilename(
          latestUserPictureProfile!
        );

        const destFileDelete: string = getPublicDirectoryPicturepath({
          usage: "users",
          filename: latestUserPictureProfileFilename!,
        });

        if (latestUserPictureProfile !== urlpath)
          filesSystem.deleteFile(destFileDelete);
      }

      await updateUserData({ name, data: value, picture: urlpath });
    }

    const responseData: UserWithOptionalChaining = { ...user };

    delete responseData.password;
    delete responseData.email;

    return jsonResult({
      response: res,
      statusCode: http.StatusOk,
      dataKey: "updatedUser",
      resultKey: "updated",
      data: responseData,
    });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
