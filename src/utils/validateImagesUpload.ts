import path from "path";
import { Response } from "express";
import messege from "../const/readonly/messege";
import { UploadedFile } from "express-fileupload";
import { default as allowedImgExt } from "../const/readonly/extentsion";
import { httpUnprocessableContentResponse } from "./responses/httpErrorsResponses";
import imageLimitSize from "../const/readonly/imageLimitSize";
import { Subscription } from "../../generated/client";

/**
 * The function validates the uploaded image file size and extension, returning an error response if
 * the conditions are not met.
 * @param {{
 *   response: Response;
 *   file: UploadedFile;
 * }}
 * @returns either `void` or a `Response` object.
 */
export default function validateImagesUpload({
  response,
  file,
  userSubs,
}: {
  response: Response;
  file: UploadedFile;
  userSubs: Subscription;
}): void | Response {
  let userPlansMapping: number =
    imageLimitSize[userSubs.plan] || imageLimitSize.none;

  if (userSubs.status == "deactive") userPlansMapping = 15;
  if (file.data.length > userPlansMapping * 1024 * 1024)
    return httpUnprocessableContentResponse({
      response,
      errorMessage: `The image file size must be less than ${userPlansMapping}mb.`,
    });

  const ext: string = path.extname(file.name);
  if (!allowedImgExt.includes(ext.toLowerCase()))
    return httpUnprocessableContentResponse({
      response,
      errorMessage: messege.unsupportedImageExt,
    });
}
