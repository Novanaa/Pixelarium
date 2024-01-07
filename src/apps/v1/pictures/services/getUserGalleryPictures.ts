import { Picture } from "../../../../../generated/client";
import client from "../../../../libs/configs/prisma";

type GetUserGalleryPicturesParams = {
  galleryId: number;
  uniquekey: string;
};

/**
 * Retrieves an array of Picture objects from the database that match the given galleryId and uniquekey.
 *
 * @param galleryId - The ID of the gallery to retrieve pictures from.
 * @param uniquekey - The unique key used to filter pictures.
 * @returns A promise that resolves to an array of Picture objects.
 *
 * @example
 * const galleryId = 1;
 * const uniquekey = "abc123";
 * const pictures = await getUserGalleryPictures(galleryId, uniquekey);
 * console.log(pictures);
 * Output: [Picture1, Picture2, Picture3]
 */
export default async function getUserGalleryPictures({
  galleryId,
  uniquekey,
}: GetUserGalleryPicturesParams): Promise<Array<Picture>> {
  const pictures: Awaited<Array<Picture>> = await client.picture.findMany({
    where: {
      gallery_id: galleryId,
      AND: {
        uniquekey,
      },
    },
  });

  return pictures;
}
