import fs from "fs";
import allowedMimeTypes from "@/constant/allowed-mime-type";
import { validateMIMEType } from "validate-image-type";

/**
 * The function `invalidPicture` checks if a picture file at the specified path has an invalid MIME
 * type.
 * @param {string} path - The `path` parameter in the `invalidPicture` function is a string that
 * represents the file path of the picture that needs to be validated.
 * @returns The `invalidPicture` function is being exported as a default asynchronous function. It
 * takes a `path` parameter of type string and returns a Promise that resolves to a boolean value. The
 * function checks if the MIME type of the picture at the specified `path` is not in the list of
 * allowed MIME types (`allowedMimeTypes`) by using the `validateMIMEType` function. If the
 */
export default async function invalidPicture(path: string): Promise<boolean> {
  const pictureVerification: Awaited<boolean> = !(
    await validateMIMEType(path, { allowMimeTypes: allowedMimeTypes })
  ).ok;

  if (pictureVerification) {
    if (fs.existsSync(path)) fs.unlinkSync(path);
  }

  return pictureVerification;
}
