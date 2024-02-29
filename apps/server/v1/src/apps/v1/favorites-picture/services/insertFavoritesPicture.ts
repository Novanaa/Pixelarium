import { Favorite } from "../../../../../packages/prisma/generated/client";
import client from "../../../../libs/configs/prisma";

type InsertFavoritesPictureParams = {
  userId: number;
  userPictureId: number;
};

/**
 * Inserts a picture into the user's favorites and updates the total number of favorited pictures.
 *
 * @param {InsertFavoritesPictureParams} params - The parameters for inserting the picture.
 * @param {number} params.userId - The ID of the user.
 * @param {number} params.userPictureId - The ID of the picture to be inserted.
 * @param {number} params.totalFavorited - The current total number of favorited pictures.
 * @returns {Promise<Favorite>} - A promise that resolves to the updated favorite object.
 */
export default async function insertFavoritesPicture({
  userId,
  userPictureId,
}: InsertFavoritesPictureParams): Promise<Favorite> {
  const queryResult: Awaited<Favorite | null> = await client.favorite.update({
    where: { user_id: userId },
    data: {
      pictures: {
        connect: {
          id: userPictureId,
        },
      },
    },
  });

  return queryResult;
}
