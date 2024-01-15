import type UsageType from "../interfaces/types/UsageTypes";

type GetPictureFilepathParams = {
  usage: UsageType;
  name?: string;
  albumName?: string;
};

/**
 * Returns the filepath for a picture based on the provided parameters.
 *
 * @param {GetPictureFilepathParams} params - The parameters for generating the filepath.
 * @param {UsageType} params.usage - The usage type of the picture.
 * @param {string} [params.name] - The name of the picture.
 * @param {string} [params.albumName] - The name of the album.
 * @returns {string} The filepath for the picture.
 * @throws {Error} If the usage is "galleries" and the name is not provided.
 * @throws {Error} If the usage is "albums" and either the name or albumName is not provided.
 */
export default function getPictureFilepath({
  usage,
  name,
  albumName,
}: GetPictureFilepathParams): string {
  const defaultPicturePath: string = "img/users/profiles/pictures";

  if (usage == "galleries" && !name)
    throw new Error("Name Should be Provided if The Usage is Galleries");

  if ((usage == "albums" && !name) || !albumName)
    throw new Error(
      "Name and Album Name Should be Provided if The Usage is Albums"
    );

  const includedPicturePath: string =
    {
      users: defaultPicturePath,
      albums: `img/albums/${name}/${albumName}/pictures`,
      galleries: `img/galleries/${name}/pictures`,
    }[usage] || defaultPicturePath;

  return includedPicturePath;
}
