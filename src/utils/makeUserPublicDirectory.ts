import FilesSystem from "../services/FilesSystem";
import logger from "../libs/configs/logger";
import slugify from "slugify";
const fileSystem: FilesSystem = new FilesSystem();

type MakeUserPublicDirectoryParams = {
  name: string;
};

/**
 * Creates a directory for a user's pictures in a public directory.
 *
 * @param {MakeUserPublicDirectoryParams} params - The parameters for creating the user's public directory.
 * @param {string} params.name - The name of the user.
 *
 * @throws {Error} If the `name` parameter is not provided.
 *
 * @example
 * makeUserPublicDirectory({ name: "John Doe" });
 */
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
