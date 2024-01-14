import client from "../../../../libs/configs/prisma";

type UpdateTotalFavoritedPicturesParams = {
  userId: number;
  totalFavoritedPictures: number;
};

/**
 * Updates the total number of favorited pictures for a given user.
 *
 * @param {UpdateTotalFavoritedPicturesParams} params - The parameters for updating the total favorited pictures.
 * @param {number} params.userId - The ID of the user.
 * @param {number} params.totalFavoritedPictures - The new total number of favorited pictures.
 * @returns {Promise<void>} - A promise that resolves when the update is complete.
 */
export default async function updateTotalFavoritedPictures({
  userId,
  totalFavoritedPictures,
}: UpdateTotalFavoritedPicturesParams): Promise<void> {
  await client.favorite.update({
    where: { user_id: userId },
    data: { favorited_pictures: totalFavoritedPictures },
  });
}
