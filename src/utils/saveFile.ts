import { UploadedFile } from "express-fileupload";
import { ErrorsRespones } from "./Response";
import { Response } from "express";

/**
 * The saveFile function saves an uploaded file to a specified path and handles any errors that occur
 * during the process.
 * @export
 * @param {{
 *   file: UploadedFile;
 *   path: string;
 *   except: ErrorsRespones;
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
  except,
  response,
}: {
  file: UploadedFile;
  path: string;
  except: ErrorsRespones;
  response: Response;
}) {
  file.mv(path, (err) => {
    if (err)
      return except.badRequest(
        response,
        "The pictures was unsuccessfully saved, please try again."
      );
  });
}
