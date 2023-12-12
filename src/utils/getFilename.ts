import path from "path";
import logger from "../libs/configs/logger";

/**
 * The function `getFilename` takes a pathname as input and returns the filename from the pathname, or
 * null if an error occurs.
 * @param {string} pathname - The `pathname` parameter is a string that represents the path of a file.
 * @returns a string value if the `path.basename` function call is successful. If there is an error, it
 * will log the error using `logger.error` and return `null`.
 */
export default function getFilename(pathname: string): string | null {
  try {
    const fileName: string = path.basename(pathname);

    return fileName;
  } catch (err) {
    logger.error(err);
    return null;
  }
}
