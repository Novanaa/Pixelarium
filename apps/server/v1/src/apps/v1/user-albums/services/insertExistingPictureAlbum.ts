import client from "../../../../libs/configs/prisma";

type InsertExistingPictureAlbumParams = {
  thumbnail: string;
  albumId: number;
  pictureId: number;
};

/**
 * Inserts an existing picture into an album.
 *
 * @param {InsertExistingPictureAlbumParams} params - The parameters for inserting the picture into the album.
 * @param {number} params.albumId - The ID of the album.
 * @param {number} params.pictureId - The ID of the picture.
 * @param {string} params.thumbnail - The thumbnail of the picture.
 * @returns {Promise<void>} - A promise that resolves to the updated album.
 */
export default async function insertExistingPictureAlbum({
  albumId,
  pictureId,
  thumbnail,
}: InsertExistingPictureAlbumParams): Promise<void> {
  await client.album.update({
    where: { id: albumId },
    data: {
      thumbnail,
      pictures: {
        connect: {
          id: pictureId,
        },
      },
    },
  });
}
