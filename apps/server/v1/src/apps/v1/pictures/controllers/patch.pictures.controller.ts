import slugify from "slugify";
import validator from "validator";
import { default as joi } from "joi";
import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import client from "../../../../libs/configs/prisma";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
  httpUnprocessableContentResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import validatePictureUniquekey from "../../../../utils/validatePictureUniquekey";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import validateUpdateUserRequestBody, {
  UpdateUserRequestBodySchemaValidation,
} from "../../../../validations/validateUpdateUserPictureRequestBody";
import validateRequestBody from "../../../../utils/validateRequestBody";
import getUserGallery, {
  UserGallery,
} from "../../galleries/services/getUserGallery";
import {
  Picture,
  Subscription,
} from "../../../../../packages/prisma/generated/client";
import PictureInformation from "../interfaces/types/PictureInformation";
import getFilename from "../../../../utils/getFilename";
import getPictureExtensionName from "../../../../utils/getPictureExtensionName";
import validateRequestFilesField from "../../../../utils/validateRequestFilesField";
import requestFileFieldName from "../../../../const/readonly/requestFileFieldName";
import validateImagesUpload from "../../../../utils/validateImagesUpload";
import { UploadedFile } from "express-fileupload";
import getUserSubscription from "../../../../utils/getUserSubscription";
import createHashedFilename from "../../../../utils/createHashedFilename";
import getPublicDirectoryPicturepath from "../../../../utils/getPublicDirectoryPicturepath";
import getPictureUrlpath from "../../../../utils/getPictureUrlpath";
import saveFile from "../../../../utils/saveFile";
import mappingFieldDataUpdateUserGalleryPicture from "../services/mappingDataFieldAndUpdateUserGalleryPicture";
import generateResponseDataAndSendHttpJsonResultResponse from "../services/generateResponseDataAndSendHttpJsonResultResponse";
import FilesSystem from "../../../../services/FilesSystem";

export default async function updateUserPicture(
  req: Request,
  res: Response
): Promise<void | Response> {
  const fs: FilesSystem = new FilesSystem();
  try {
    const { name, uniquekey } = req.params;

    const validateUniquekey: void | Response = validatePictureUniquekey({
      uniquekey,
      response: res,
    });

    if (validateUniquekey) return;

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByNameOrEmail({ field: "name", value: name });

    if (!user) return httpNotFoundResponse({ response: res });

    const slugifiedUsername: string = slugify(user.name, { lower: true });

    delete user.email;
    delete user.password;

    const userSubs: Awaited<Subscription | null> = await getUserSubscription(
      user.id
    );

    if (!userSubs)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "Unexpected Errors Occurred",
      });

    if (!Object.keys(req.body).length && !req.files)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "Cannot find what you want to update",
      });

    const {
      value,
      error,
    }: joi.ValidationResult<UpdateUserRequestBodySchemaValidation> =
      validateUpdateUserRequestBody(req);

    const requestBodyValidation: void | Response = validateRequestBody({
      res,
      error,
    });

    if (requestBodyValidation) return;

    const userGallery: Awaited<UserGallery> = await getUserGallery(user.id);

    if (!userGallery.pictures.length)
      return httpNotFoundResponse({
        response: res,
        errorMessage: "Your gallery pictures was empty!",
      });

    const userGalleryPicture: Picture = userGallery.pictures.filter(
      (p) => p.uniquekey == uniquekey
    )[0];

    if (!userGalleryPicture)
      return httpNotFoundResponse({
        response: res,
        errorMessage: "The gallery picture doesn't exist",
      });

    const externalPictureUrl: string = value.image_url as string;

    if (userGalleryPicture.is_external_picture) {
      if (req.files)
        return httpUnprocessableContentResponse({
          response: res,
          errorMessage:
            "You cannot upload a picture when original image is external picture",
        });

      if (externalPictureUrl) {
        if (userSubs.plan == "none")
          return httpBadRequestResponse({
            response: res,
            errorMessage:
              "To update picture must required Gold, Diamond, or Netherite plans",
          });

        const isValidPictureUrl: boolean = validator.isURL(externalPictureUrl);

        if (!isValidPictureUrl)
          return httpBadRequestResponse({
            response: res,
            errorMessage: "The image url must be valid picture url",
          });
      }

      const filename: string = getFilename(
        externalPictureUrl || userGalleryPicture.url
      );
      const extension: string = getPictureExtensionName(filename);
      const pictureInfo: PictureInformation = {
        filename,
        extension,
        is_external_picture: userGalleryPicture.is_external_picture,
      };

      const updatedPictureGallery: Awaited<Picture> =
        await mappingFieldDataUpdateUserGalleryPicture({
          pictureInfo,
          uniquekey,
          value,
        });

      const httpSuccessResponse: void | Response =
        generateResponseDataAndSendHttpJsonResultResponse({
          old_data: userGalleryPicture,
          owner: user,
          response: res,
          updated_data: updatedPictureGallery,
        });

      if (httpSuccessResponse) return;
    }

    if (!userGalleryPicture.is_external_picture) {
      if (externalPictureUrl)
        return httpBadRequestResponse({
          response: res,
          errorMessage:
            "You cannot use external picture when the original picture is internal picture",
        });

      if (req.files) {
        const picture: UploadedFile = req.files[
          requestFileFieldName
        ] as UploadedFile;

        if (userSubs.plan == "none")
          return httpBadRequestResponse({
            response: res,
            errorMessage:
              "To update picture must required Gold, Diamond, or Netherite plans",
          });

        const requestFilesFieldValidation: void | Response =
          validateRequestFilesField({
            field: requestFileFieldName,
            request: req,
            response: res,
          });

        if (requestFilesFieldValidation) return;

        const imageUploadValidation: void | Response = validateImagesUpload({
          response: res,
          file: picture,
          userSubs,
        });

        if (imageUploadValidation) return;

        const filename: string = createHashedFilename({ file: picture });
        const pictureExtension: string = getPictureExtensionName(filename);
        const pictureUrlpath: string = getPictureUrlpath({
          request: req,
          filename,
          usage: "galleries",
          name: slugifiedUsername,
        });
        const pictureDirpath: string = getPublicDirectoryPicturepath({
          usage: "galleries",
          filename,
          name: slugifiedUsername,
        });
        const oldPictureDirpath: string = getPublicDirectoryPicturepath({
          usage: "galleries",
          filename: userGalleryPicture.filename,
          name: slugifiedUsername,
        });

        const pictureInfo: PictureInformation = {
          extension: pictureExtension,
          filename,
          is_external_picture: userGalleryPicture.is_external_picture,
        };

        const updatedPictureGallery: Awaited<Picture> =
          await mappingFieldDataUpdateUserGalleryPicture({
            pictureInfo,
            uniquekey,
            value: { ...value, image_url: pictureUrlpath },
          });

        fs.deleteFile(oldPictureDirpath);

        saveFile({ file: picture, path: pictureDirpath, response: res });

        const httpSuccessResponse: void | Response =
          generateResponseDataAndSendHttpJsonResultResponse({
            old_data: userGalleryPicture,
            owner: user,
            response: res,
            updated_data: updatedPictureGallery,
          });

        if (httpSuccessResponse) return;
      }

      if (!req.files) {
        const pictureInfo: PictureInformation = {
          extension: userGalleryPicture.extension,
          filename: userGalleryPicture.filename,
          is_external_picture: userGalleryPicture.is_external_picture,
        };

        const updatedPictureGallery: Awaited<Picture> =
          await mappingFieldDataUpdateUserGalleryPicture({
            pictureInfo,
            uniquekey,
            value,
          });

        const httpSuccessResponse: void | Response =
          generateResponseDataAndSendHttpJsonResultResponse({
            old_data: userGalleryPicture,
            owner: user,
            response: res,
            updated_data: updatedPictureGallery,
          });

        if (httpSuccessResponse) return;
      }
    }
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
