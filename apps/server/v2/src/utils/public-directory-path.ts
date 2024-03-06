/**
 * The function `getPublicAvatarDirectoryPath` returns the path to the public avatar directory with the
 * provided filename.
 * @param {string} filename - Thank you for providing the function `getPublicAvatarDirectoryPath`! It
 * seems like you were about to ask for clarification on the `filename` parameter. Could you please
 * provide more details or let me know how I can assist you further with this function?
 * @returns the path to the public avatar directory with the provided filename appended to it.
 */
export function getAvatarDirectoryPath(filename: string): string {
  return "./public/avatar" + filename;
}

interface GetPublicGalleryDirectoryPathParams {
  name: string;
  filename: string;
}

/**
 * The function returns the path to a file in a public gallery directory based on the filename and name
 * parameters.
 * @param {GetPublicGalleryDirectoryPathParams}  - The `GetPublicGalleryDirectoryPathParams` object
 * contains two properties:
 * @returns a string that represents the path to a specific file in the public galleries directory. The
 * path is constructed using the provided `name` and `filename` parameters.
 */
export function getGalleryDirectoryPath({
  filename,
  name,
}: GetPublicGalleryDirectoryPathParams) {
  return `./public/galleries/${name}/${filename}`;
}
