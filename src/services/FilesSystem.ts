import fs from "fs";
import logger from "../libs/configs/logger";

class FilesSystem {
  isExist(path: string): boolean | null {
    try {
      const isExist: boolean = fs.existsSync(path);

      return isExist;
    } catch (err) {
      logger.error(err);
      return null;
    }
  }
  deleteFile(path: string): void | null {
    try {
      const isExistFile: boolean | null = this.isExist(path);

      if (isExistFile) {
        fs.unlinkSync(path);
      }
    } catch (err) {
      logger.error(err);
      return null;
    }
  }
}

export default FilesSystem;
