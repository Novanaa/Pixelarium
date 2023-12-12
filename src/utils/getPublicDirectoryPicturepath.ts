import UsageType from "../interfaces/types/UsageTypes";
import getPictureFilepath from "./getPictureFilepath";
/**
 * The function `getPublicDirectoryPicturepath` returns the file path for a picture in the public
 * directory based on its usage and filename.
 * @export
 * @param {{
 *   usage: UsageType;
 *   filename: string;
 * }} {
 *   usage,
 *   filename,
 * }
 * @returns a string representing the public directory picture path.
 */
export default function getPublicDirectoryPicturepath({
  usage,
  filename,
}: {
  usage: UsageType;
  filename: string;
}): string {
  const pictureFilepath: string = getPictureFilepath({ usage });
  const publicDirectoryPicturepath: string = `./public/${pictureFilepath}/${filename}`;

  return publicDirectoryPicturepath;
}
