import client from "../../../../libs/configs/prisma";

type DeleteUserFavoritesPictureParams = {
  userId: number;
  uniquekey: string;
};

/**
 * Deletes a user's favorite picture.
 *
 * @param {DeleteUserFavoritesPictureParams} params - The parameters for deleting the user's favorite picture.
 * @param {number} params.userId - The ID of the user.
 * @param {string} params.uniquekey - The unique key of the picture to be removed from favorites.
 * @returns {Promise<void>} - A promise that resolves when the picture is successfully removed from favorites.
 */
export default async function deleteUserFavoritesPicture({
  userId,
  uniquekey,
}: DeleteUserFavoritesPictureParams): Promise<void> {
  await client.favorite.update({
    where: { user_id: userId },
    data: {
      pictures: {
        disconnect: { uniquekey },
      },
    },
  });
}
