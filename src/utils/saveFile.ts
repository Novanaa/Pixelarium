import { UploadedFile } from "express-fileupload";
import { ErrorsRespones } from "./Response";
import { Response } from "express";

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
