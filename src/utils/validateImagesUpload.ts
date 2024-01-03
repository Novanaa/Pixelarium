import path from "path";
import { Response } from "express";
import messege from "../const/readonly/messege";
import { UploadedFile } from "express-fileupload";
import { default as allowedImgExt } from "../const/readonly/extentsion";
import { httpUnprocessableContentResponse } from "./responses/httpErrorsResponses";
import imageLimitSize from "../const/readonly/imageLimitSize";

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
  plan,
}: {
  response: Response;
  file: UploadedFile;
  plan: string;
}): void | Response {
  const userPlansMapping: number = imageLimitSize[plan] || imageLimitSize.none;
  if (file.data.length > userPlansMapping * 1024 * 1024)
    return httpUnprocessableContentResponse({
      response,
      errorMessage: messege.unsupportedImageFileSize,
    });

  const ext: string = path.extname(file.name);
  if (!allowedImgExt.includes(ext.toLowerCase()))
    return httpUnprocessableContentResponse({
      response,
      errorMessage: messege.unsupportedImageExt,
    });
}
