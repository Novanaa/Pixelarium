import {
  Favorite,
  Picture,
} from "../../../../../packages/prisma/generated/client";
import client from "../../../../libs/configs/prisma";
import UserFavoritePictures from "../interfaces/UserFavoritesPictures";

/**
 * Retrieves the favorite pictures of a user.
 *
 * @param userId - The ID of the user.
 * @returns A Promise that resolves to an object containing the user's favorite pictures, or null if the user has no favorite pictures.
 */
export default async function getUserFavoritesPictures(
  userId: number
): Promise<UserFavoritePictures | null> {
  const favoritePictures: Awaited<Favorite | null> =
    await client.favorite.findUnique({
      where: { user_id: userId },
    });

  if (!favoritePictures) return null;

  const pictures: Awaited<Array<Picture>> = await client.picture.findMany({
    where: { favorite_id: favoritePictures.id },
  });

  const userFavoritePictures: UserFavoritePictures = {
    ...favoritePictures,
    pictures,
  };

  return userFavoritePictures;
}
