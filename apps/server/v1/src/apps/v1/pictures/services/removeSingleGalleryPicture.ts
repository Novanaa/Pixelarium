import { Picture } from "../../../../../packages/prisma/generated/client";
import client from "../../../../libs/configs/prisma";

/**
 * Removes a single picture from the gallery.
 *
 * @param uniquekey - The unique key of the picture to be removed.
 * @returns A Promise that resolves to the deleted Picture object.
 * @throws Error if the uniquekey is not provided.
 */
export default async function removeSingleGalleryPicture(
  uniquekey: string
): Promise<Picture> {
  if (!uniquekey) throw new Error("Picture Uniquekey Provided");

  const deletePicture: Awaited<Picture> = await client.picture.delete({
    where: { uniquekey },
  });

  return deletePicture;
}
