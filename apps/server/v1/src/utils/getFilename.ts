import path from "path";

/**
 * The function `getFilename` takes a pathname as input and returns the filename from the pathname, or
 * null if an error occurs.
 * @param {string} pathname - The `pathname` parameter is a string that represents the path of a file.
 * @returns a string value if the `path.basename` function call is successful. If there is an error, it
 */
export default function getFilename(pathname: string): string {
  if (!pathname) throw new Error("pathname is not provided!");

  const fileName: string = path.basename(pathname);

  return fileName;
}
