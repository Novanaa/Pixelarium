import path from "path";
import logger from "../libs/configs/logger";
import FilesSystem from "../services/FilesSystem";

export default function getFilename(pathname: string): string | null {
  const filesSystem = new FilesSystem();
  try {
    const isFilepathExist = filesSystem.isExist(pathname);

    if (!isFilepathExist) return null;

    const fileName: string = path.basename(pathname);

    return fileName;
  } catch (err) {
    logger.error(err);
    return null;
  }
}
