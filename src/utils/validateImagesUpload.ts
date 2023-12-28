import path from "path";
import { Response } from "express";
import messege from "../const/readonly/messege";
import { UploadedFile } from "express-fileupload";
import { default as allowedImgExt } from "../const/readonly/extentsion";
import { httpUnprocessableContentResponse } from "./responses/httpErrorsResponses";

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
}: {
  response: Response;
  file: UploadedFile;
}): void | Response {
  if (file.data.length > 15 * 1024 * 1024)
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
