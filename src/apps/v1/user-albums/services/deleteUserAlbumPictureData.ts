import client from "../../../../libs/configs/prisma";

type DeleteUserAlbumPictureDataParams = {
  albumId: number;
  uniquekey: string;
};

/**
 * Deletes a picture from a user's album.
 *
 * @param {DeleteUserAlbumPictureDataParams} params - The parameters for deleting the picture.
 * @param {number} params.albumId - The ID of the album.
 * @param {string} params.uniquekey - The unique key of the picture.
 * @returns {Promise<void>} - A promise that resolves when the picture is deleted.
 */
export default async function deleteUserAlbumPictureData({
  albumId,
  uniquekey,
}: DeleteUserAlbumPictureDataParams): Promise<void> {
  await client.album.update({
    where: {
      id: albumId,
    },
    data: {
      pictures: {
        delete: {
          uniquekey,
        },
      },
    },
  });
}
