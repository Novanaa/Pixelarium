import path from "path";
import logger from "../libs/configs/logger";

export default function getFilename(pathname: string): string | null {
  try {
    const fileName: string = path.basename(pathname);

    return fileName;
  } catch (err) {
    logger.error(err);
    return null;
  }
}
