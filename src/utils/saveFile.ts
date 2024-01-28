import { UploadedFile } from "express-fileupload";
import { Response } from "express";
import { httpBadRequestResponse } from "./responses/httpErrorsResponses";

type SaveFileParams = {
  file: UploadedFile;
  path: string;
  response: Response;
};

/**
 * Saves a file to the specified path.
 *
 * @param {SaveFileParams} params - The parameters for saving the file.
 * @param {UploadedFile} params.file - The file to be saved.
 * @param {string} params.path - The path where the file should be saved.
 * @param {Response} params.response - The response object to send HTTP responses.
 *
 * @returns {Promise<void>} - A promise that resolves when the file is saved successfully.
 *
 * @throws {Error} - If there is an error while saving the file.
 */
export default async function saveFile({
  file,
  path,
  response,
}: SaveFileParams): Promise<void> {
  file.mv(path, (err) => {
    if (err)
      return httpBadRequestResponse({
        response,
        errorMessage:
          "The pictures was unsuccessfully saved, please try again.",
      });
  });
}
