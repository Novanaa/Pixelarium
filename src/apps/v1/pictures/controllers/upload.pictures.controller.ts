import Joi from "joi";
import slugify from "slugify";
import validator from "validator";
import { Request, Response } from "express";
import saveFile from "../../../../utils/saveFile";
import { UploadedFile } from "express-fileupload";
import logger from "../../../../libs/configs/logger";
import client from "../../../../libs/configs/prisma";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
  httpUnprocessableContentResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import userPictureManagementRequestBodyValidation from "../../../../validations/userPictureManagementRequestBodyValidation";
import UserPictureManagementRequestBodyValidationTypes from "../../../../validations/interfaces/types/UserPictureManagementRequestBodyValidationTypes";
import validateRequestBody from "../../../../utils/validateRequestBody";
import getUserGallery, {
  UserGallery,
} from "../../galleries/services/getUserGallery";
import validateRequestFilesField from "../../../../utils/validateRequestFilesField";
import requestFileFieldName from "../../../../const/readonly/requestFileFieldName";
import validateImagesUpload from "../../../../utils/validateImagesUpload";
import { Picture, Subscription } from "../../../../../generated/client";
import getUserSubscription from "../../../../utils/getUserSubscription";
import createHashedFilename from "../../../../utils/createHashedFilename";
import getPictureUrlpath from "../../../../utils/getPictureUrlpath";
import getPictureExtensionName from "../../../../utils/getPictureExtensionName";
import SendJsonResultHttpResponse from "../../../../services/sendJsonResultHttpResponse";
import {
  generateUploadPictureResponseData,
  AddUserGalleryPictureResponseData,
} from "../services/generateHttpResponseData";
import insertUserPictureGallery from "../services/insertUserPictureGallery";
import getPublicDirectoryPicturepath from "../../../../utils/getPublicDirectoryPicturepath";
import validateEmptyRequestBody from "../../../../utils/validateEmptyRequestBody";
import getFilename from "../../../../utils/getFilename";
import http from "../../../../const/readonly/httpStatusCode";
import generatePictureEmbedLinks from "../../../../services/generatePictureEmbedLinks";
// import compressUserPicture from "../../../../services/compressUserPicture";

export default async function addUserGalleryPicture(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const { name } = req.params;

    const validateEmptyRequestBodyResult: void | Response =
      validateEmptyRequestBody({ request: req, response: res });

    if (validateEmptyRequestBodyResult) return;

    const {
      error,
      value,
    }: Joi.ValidationResult<UserPictureManagementRequestBodyValidationTypes> =
      userPictureManagementRequestBodyValidation(req);

    const validateRequestBodyResult: void | Response = validateRequestBody({
      res,
      error,
    });

    if (validateRequestBodyResult) return;

    if (!name)
      return httpBadRequestResponse({
        response: res,
        errorMessage:
          "Query Params Name Should be Provided, example => /v1/plxm/pictures/<your-pixelarium-username>/upload",
      });

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByNameOrEmail({ field: "name", value: name });

    if (!user) return httpNotFoundResponse({ response: res });

    const slugifiedUsername: string = slugify(user.name, { lower: true });

    delete user.email;
    delete user.password;

    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user.id
    );

    const isUserUsedExternalPicture: boolean =
      value.use_external_image_url as boolean;

    const pictureExpiresIn: number | null = !value.expiresInDays
      ? null
      : value.expiresInDays;

    if (req.files) {
      const picture: UploadedFile = req.files[
        requestFileFieldName
      ] as UploadedFile;

      const userSubs: Awaited<Subscription | null> = await getUserSubscription(
        user.id
      );

      if (!userSubs)
        return httpBadRequestResponse({
          response: res,
          errorMessage: "Unexpected Error Occurred",
        });

      if (isUserUsedExternalPicture)
        return httpBadRequestResponse({
          response: res,
          errorMessage:
            "You cannot uploading file if the 'use_external_image_url' field is setted to true",
        });

      const requestFilesFieldValidation: void | Response =
        validateRequestFilesField({
          response: res,
          request: req,
          field: requestFileFieldName,
        });

      if (requestFilesFieldValidation) return;

      const validateImagesUploadResult: void | Response = validateImagesUpload({
        file: picture,
        response: res,
        userSubs,
      });

      if (validateImagesUploadResult) return;

      const filename: string = createHashedFilename({ file: picture });
      const pictureExtension: string = getPictureExtensionName(filename);
      const pictureUrlpath: string = getPictureUrlpath({
        request: req,
        filename,
        usage: "galleries",
        name: slugifiedUsername,
      });
      const pictureDest: string = getPublicDirectoryPicturepath({
        usage: "galleries",
        filename,
        name: slugifiedUsername,
      });

      const insertedPicture: Awaited<Picture> = await insertUserPictureGallery({
        userGallery,
        extension: pictureExtension,
        filename,
        value,
        url: pictureUrlpath,
        expires_in: pictureExpiresIn,
        isExternalPicture: true,
      });

      if (!insertedPicture.is_private) {
        await generatePictureEmbedLinks({
          name: user.name,
          uniquekey: insertedPicture.uniquekey,
        });
      }

      const responseData: AddUserGalleryPictureResponseData =
        generateUploadPictureResponseData({ insertedPicture, user });

      // const pictureFilesize: number = picture.data.length;
      // const minimumPictureFilesizeToCompress: number = 15 * 1024 * 1024;
      // if (pictureFilesize < minimumPictureFilesizeToCompress) {
      //   saveFile({ file: picture, response: res, path: pictureDest });
      // }

      // await compressUserPicture({ data: picture.data, path: pictureDest });

      saveFile({ file: picture, response: res, path: pictureDest });

      return SendJsonResultHttpResponse<AddUserGalleryPictureResponseData>({
        response: res,
        responseData,
        options: { statusCode: http.StatusCreated, resultKey: "created" },
      });
    }

    if (!req.files) {
      const externalPictureUrl: string = value.picture_details
        .image_url as string;

      if (isUserUsedExternalPicture && !externalPictureUrl)
        return httpUnprocessableContentResponse({
          response: res,
          errorMessage:
            "The image field must be filled if the use_external_image_url is setted to true",
        });

      const isUrl: boolean = validator.isURL(externalPictureUrl);

      if (!isUrl)
        return httpBadRequestResponse({
          response: res,
          errorMessage: "The external image url is not a valid image url",
        });

      const filename: string = getFilename(externalPictureUrl);
      const pictureExtension: string = getPictureExtensionName(filename);

      const insertedPicture: Awaited<Picture> = await insertUserPictureGallery({
        userGallery,
        extension: pictureExtension,
        filename: filename.split(".")[0],
        value,
        url: externalPictureUrl,
        expires_in: pictureExpiresIn,
        isExternalPicture: false,
      });

      if (!insertedPicture.is_private) {
        await generatePictureEmbedLinks({
          name: user.name,
          uniquekey: insertedPicture.uniquekey,
        });
      }

      const responseData: AddUserGalleryPictureResponseData =
        generateUploadPictureResponseData({
          insertedPicture,
          user,
        });

      return SendJsonResultHttpResponse<AddUserGalleryPictureResponseData>({
        response: res,
        responseData,
        options: { statusCode: http.StatusCreated, resultKey: "created" },
      });
    }
  } catch (err) {
    if (err) throw err;
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
