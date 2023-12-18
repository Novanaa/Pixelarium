import logger from "../../../../libs/configs/logger";
import client from "../../../../libs/configs/prisma";
import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { ErrorsRespones, SuccessRespones } from "../../../../utils/Response";
import validateRequestIDParams from "../../../../utils/validateRequestIDParams";
import userValidation from "../../../../validations/userValidation";
import validateRequestBody from "../../../../utils/validateRequestBody";
import { User } from "../../../../../generated/client";
import { isUserExistByIdOrProviderId } from "../../../../utils/isUser";
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

export default async function updateUser(
  req: Request,
  res: Response
): Promise<void | Response> {
  const Error: ErrorsRespones = new ErrorsRespones();
  const filesSystem: FilesSystem = new FilesSystem();
  try {
    const { id } = req.params;

    validateRequestIDParams({ id, response: res, except: Error });

    const { error, value } = userValidation<TUserValidation>({
      payload: req.body,
    });

    const validateResult: void | Response = validateRequestBody({
      res,
      value,
      error,
      except: Error,
      usage: "update",
    });

    if (validateResult) return;

    const user: Awaited<User | null> = await isUserExistByIdOrProviderId({
      field: "id",
      value: id,
    });

    if (!user) return Error.notFound(res);

    const keys: string[] = Object.keys(value);
    if (keys.includes("name")) {
      const isUsernameTaken: Awaited<string | boolean> =
        await checkIfUsernameHasBeenTaken(value.name);

      if (isUsernameTaken)
        return Error.unprocessable(res, "The name has already taken");
    }

    if (!req.files) {
      await updateUserData({ id, data: value });
    }

    if (req.files) {
      const picture: UploadedFile = req.files.picture as UploadedFile;

      const validateFieldResult: void | Response = validateRequestFilesField({
        except: Error,
        request: req,
        response: res,
        field: "picture",
      });

      if (validateFieldResult) return;

      const validateImagesresult: void | Response = validateImagesUpload({
        except: Error,
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

      saveFile({ except: Error, file: picture, path: pathname, response: res });

      const isInternalPicture: boolean | null = checkIfPictureIsInternalPicture(
        { usage: "users", picturePath: pathname }
      );

      if (isInternalPicture) {
        const latestUserPictureProfile: Awaited<string | null | undefined> =
          await getLatestUserProfilePicture(id);

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

      await updateUserData({ id, data: value, picture: urlpath });
    }

    return new SuccessRespones().success(res, "updated");
  } catch (err) {
    logger.error(err);
    return Error.badRequest(res);
  } finally {
    await client.$disconnect();
  }
}
