import path from "path";
import { UploadedFile } from "express-fileupload";

export default function createHashedFilename({
  file,
}: {
  file: UploadedFile;
}): string {
  if (!file) throw new Error("Cannot found file");

  const hashedFilename: string = file.md5 + path.extname(file.name);

  return hashedFilename;
}
