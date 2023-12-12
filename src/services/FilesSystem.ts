import fs from "fs";
import logger from "../libs/configs/logger";

/* The FilesSystem class provides methods to check if a file exists and delete a file. */
class FilesSystem {
  /**
   * The function checks if a file or directory exists at the given path and returns a boolean value
   * indicating its existence, or null if an error occurs.
   * @param {string} path - The `path` parameter is a string that represents the file or directory path
   * that you want to check for existence.
   * @returns a boolean value indicating whether the file or directory at the given path exists. If the
   * file or directory exists, it returns true. If it does not exist, it returns false. If an error
   * occurs during the execution of the function, it returns null.
   */
  public isExist(path: string): boolean | null {
    try {
      const isExist: boolean = fs.existsSync(path);

      return isExist;
    } catch (err) {
      logger.error(err);
      return null;
    }
  }
  /**
   * The `deleteFile` function deletes a file at the specified path and returns true if the file exists
   * and is successfully deleted, false if the file does not exist, and null if an error occurs.
   * @param {string} path - The `path` parameter is a string that represents the file path of the file
   * you want to delete.
   * @returns The function `deleteFile` returns a boolean value (`true` or `false`) if the file is
   * successfully deleted, or `null` if there is an error.
   */
  public deleteFile(path: string): boolean | null {
    try {
      const isExistFile: boolean | null = this.isExist(path);

      if (isExistFile) {
        fs.unlinkSync(path);

        return true;
      }

      return false;
    } catch (err) {
      logger.error(err);
      return null;
    }
  }
}

export default FilesSystem;
