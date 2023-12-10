import UsageType from "../interfaces/types/UsageTypes";
import getPictureFilepath from "./getPictureFilepath";

export default function getPublicDirectoryPicturepath({
  usage,
  filename,
}: {
  usage: UsageType;
  filename: string;
}): string {
  const pictureFilepath: string = getPictureFilepath({ usage });
  const publicDirectoryPicturepath: string = `./public/${pictureFilepath}/${filename}`;

  return publicDirectoryPicturepath;
}
