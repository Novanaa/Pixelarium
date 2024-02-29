import UsageType from "../interfaces/types/UsageTypes";
import getPictureFilepath from "./getPictureFilepath";

type GetPublicDirectoryPicturepathParams = {
  usage: UsageType;
  filename: string;
  name?: string;
  albumName?: string;
};

/**
 * Retrieves the public directory picture path based on the provided parameters.
 *
 * @param {GetPublicDirectoryPicturepathParams} params - The parameters for retrieving the public directory picture path.
 * @param {UsageType} params.usage - The usage type of the picture.
 * @param {string} params.filename - The filename of the picture.
 * @param {string} [params.name] - The name associated with the picture.
 * @param {string} [params.albumName] - The album name associated with the picture.
 * @returns {string} The public directory picture path.
 */
export default function getPublicDirectoryPicturepath({
  usage,
  filename,
  name,
  albumName,
}: GetPublicDirectoryPicturepathParams): string {
  const pictureFilepath: string = getPictureFilepath({
    usage,
    name,
    albumName,
  });
  const publicDirectoryPicturepath: string = `./public/${pictureFilepath}/${filename}`;

  return publicDirectoryPicturepath;
}
