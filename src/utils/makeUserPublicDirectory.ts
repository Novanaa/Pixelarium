import FilesSystem from "../services/FilesSystem";
import logger from "../libs/configs/logger";
import slugify from "slugify";
const fileSystem: FilesSystem = new FilesSystem();

type MakeUserPublicDirectoryParams = {
  name: string;
};

export default function makeUserPublicDirectory({
  name,
}: MakeUserPublicDirectoryParams) {
  try {
    if (!name) throw new Error("Username params should be provided");

    name = slugify(name);

    const basePublicDirPath: string = "./public/img";
    const galleriesPictureDirPath: string = `${basePublicDirPath}/galleries/${name}/pictures`;
    fileSystem.makeDirectory(galleriesPictureDirPath);
  } catch (err) {
    logger.error(err);
  }
}
