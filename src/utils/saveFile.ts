import { UploadedFile } from "express-fileupload";
import { Response } from "express";
import { httpBadRequestResponse } from "./responses/httpErrorsResponses";

/**
 * The saveFile function saves an uploaded file to a specified path and handles any errors that occur
 * during the process.
 * @export
 * @param {{
 *   file: UploadedFile;
 *   path: string;
 *   response: Response;
 * }} {
 *   file,
 *   path,
 *   except,
 *   response,
 * }
 *
 * @returns void
 */
export default function saveFile({
  file,
  path,
  response,
}: {
  file: UploadedFile;
  path: string;
  response: Response;
}) {
  file.mv(path, (err) => {
    if (err)
      return httpBadRequestResponse({
        response,
        errorMessage:
          "The pictures was unsuccessfully saved, please try again.",
      });
  });
}
