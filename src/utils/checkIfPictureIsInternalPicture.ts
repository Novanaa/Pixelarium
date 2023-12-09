import logger from "../libs/configs/logger";
import getPictureFilepath from "./getPictureFilepath";
import UsageType from "../interfaces/types/UsageTypes";

export default function checkIfPictureIsInternalPicture({
  picturePath,
  usage,
}: {
  picturePath: string;
  usage: UsageType;
}): boolean | null {
  try {
    const includedPicturePath: string = getPictureFilepath({ usage });

    const isInternalPicture: boolean =
      picturePath.includes(includedPicturePath);

    return isInternalPicture;
  } catch (err) {
    logger.error(err);
    return null;
  }
}
