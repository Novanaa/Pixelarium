import {
  Gallery,
  Picture,
} from "../../../../../packages/prisma/generated/client";
import client from "../../../../libs/configs/prisma";
import findUserGallery from "../utils/findUserGallery";

type SearchQueryGalleryPicturesParams = {
  query: string;
  userId: number;
};

/**
 * Function to search gallery pictures by a query string.
 * It searches the gallery pictures by the provided userId, querying for both the title and description.
 *
 * @param params - Parameters to be passed.
 * @param params.query - Query string to search for.
 * @param params.userId - User ID of the gallery owner.
 *
 * @returns - Array of Picture objects matching the query.
 */
export default async function searchQueryGalleryPictures({
  query,
  userId,
}: SearchQueryGalleryPicturesParams) {
  const gallery: Awaited<Gallery | null> = await findUserGallery(userId);

  const searchGalleryPictures: Awaited<Array<Picture>> =
    await client.picture.findMany({
      where: {
        gallery_id: gallery?.id || 0,
        OR: [
          {
            title: { contains: query },
          },
          {
            description: { contains: query },
          },
        ],
      },
    });

  return searchGalleryPictures;
}
