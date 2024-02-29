import path from "path";
import { UploadedFile } from "express-fileupload";

/**
 * The function creates a hashed filename by combining the MD5 hash of the file and its extension.
 * @param  - The `createHashedFilename` function takes an object as its parameter with a property
 * `file` of type `UploadedFile`. The `UploadedFile` type is not defined in the code snippet, but it is
 * likely a custom type that represents an uploaded file.
 * @returns a string, which is the hashed filename.
 */
export default function createHashedFilename({
  file,
}: {
  file: UploadedFile;
}): string {
  if (!file) throw new Error("Cannot found file");

  const hashedFilename: string = file.md5 + path.extname(file.name);

  return hashedFilename;
}
