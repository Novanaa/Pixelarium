import fs from "fs";
import { default as fsp } from "fs/promises";
import logger from "../libs/configs/logger";
import { default as npath } from "path";
import { rimrafSync } from "rimraf";

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
  /**
   * Creates a new directory at the specified path.
   *
   * @param path - The path parameter represents the directory path that you want to create.
   *
   * @throws {Error} - If the path parameter is not provided or is not of type string.
   *
   * @returns {void | null} - This method does not return any value. If an error occurs during the execution of the function, it logs the error using the logger.error function.
   */
  public makeDirectory(path: string): void | null {
    try {
      if (!path) throw new Error("Path Params Should be Provided");

      if (typeof path !== "string") throw new Error("Path Should be String");

      fs.mkdirSync(path, {
        recursive: true,
      });
    } catch (err) {
      logger.error(err);
      return null;
    }
  }
  /**
   * Deletes all files in the specified directory.
   *
   * @param {string} path - The path parameter represents the directory path from which you want to delete all files.
   *
   * @throws {Error} - If the dirpath is not found.
   *
   * @returns {Promise<void | null>} - This method returns a Promise that resolves to void if all files are successfully deleted, or null if there is an error.
   */
  public async deleteDirectoryFiles(path: string): Promise<void | null> {
    try {
      if (!this.isExist(path)) throw new Error("The dirpath is not found");

      const files: Awaited<Array<string>> = await fsp.readdir(path);

      if (files.length) {
        files.map(async (file) => {
          await fsp.unlink(npath.join(path, file));
        });
      }
    } catch (err) {
      logger.error(err);
      return null;
    }
  }
  /**
   * Deletes a directory at the specified path.
   *
   * @param {string} path - The path parameter represents the directory path that you want to delete.
   *
   * @returns {boolean | null} - Returns a boolean value indicating whether the directory is successfully deleted. If the directory exists and is successfully deleted, it returns true. If the directory does not exist, it returns false. If an error occurs during the execution of the function, it returns null.
   */
  public deleteDirectory(path: string): boolean | null {
    try {
      if (this.isExist(path)) {
        rimrafSync(path);

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
