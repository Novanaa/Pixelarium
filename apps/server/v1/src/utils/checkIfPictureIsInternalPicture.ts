import logger from "../libs/configs/logger";
import getPictureFilepath from "./getPictureFilepath";
import UsageType from "../interfaces/types/UsageTypes";

type CheckIfPictureIsInternalPictureParams = {
  picturePath: string;
  usage: UsageType;
  name?: string;
  albumName?: string;
};

/**
 * The function `checkIfPictureIsInternalPicture` checks if a given picture path is an internal picture
 * based on the usage type.
 * @export
 * @param {{
 *   picturePath: string;
 *   usage: UsageType;
 * }} {
 *   picturePath,
 *   usage,
 * }
 * @returns a boolean value indicating whether the picturePath is an internal picture or not. If an
 * error occurs during the execution of the function, it will return null.
 */
export default function checkIfPictureIsInternalPicture({
  picturePath,
  usage,
  name,
  albumName,
}: CheckIfPictureIsInternalPictureParams): boolean | null {
  try {
    const includedPicturePath: string = getPictureFilepath({
      usage,
      name,
      albumName,
    });

    const isInternalPicture: boolean =
      picturePath.includes(includedPicturePath);

    return isInternalPicture;
  } catch (err) {
    logger.error(err);
    return null;
  }
}
