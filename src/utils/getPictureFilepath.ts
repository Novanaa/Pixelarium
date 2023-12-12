import type UsageType from "../interfaces/types/UsageTypes";

/**
 * The function `getPictureFilepath` returns the file path based on the usage type provided.
 * @param  - - `usage`: A string representing the type of usage for the picture file. It can be one of
 * the following values: "users", "albums", or "galleries".
 * @returns a string representing the filepath for a picture based on the provided usage.
 */
export default function getPictureFilepath({
  usage,
}: {
  usage: UsageType;
}): string {
  const defaultPicturePath: string = "img/users/profiles/pictures";

  const includedPicturePath: string =
    {
      users: defaultPicturePath,
      albums: "img/albums/pictures",
      galleries: "img/galleries/pictures",
    }[usage] || defaultPicturePath;

  return includedPicturePath;
}
