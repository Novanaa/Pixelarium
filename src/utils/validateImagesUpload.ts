import { Response } from "express";
import { UploadedFile } from "express-fileupload";
import { ErrorsRespones } from "./Response";
import messege from "../const/readonly/messege";
import { default as allowedImgExt } from "../const/readonly/extentsion";
import path from "path";

/**
 * The function validates the uploaded image file size and extension, returning an error response if
 * the conditions are not met.
 * @param {{
 *   response: Response;
 *   file: UploadedFile;
 *   except: ErrorsRespones;
 * }}
 * @returns either `void` or a `Response` object.
 */
export default function validateImagesUpload({
  response,
  file,
  except,
}: {
  response: Response;
  file: UploadedFile;
  except: ErrorsRespones;
}): void | Response {
  if (file.data.length > 15 * 1024 * 1024)
    return except.unprocessable(response, messege.unsupportedImageFileSize);

  const ext: string = path.extname(file.name);
  if (!allowedImgExt.includes(ext.toLowerCase()))
    return except.unprocessable(response, messege.unsupportedImageExt);
}
