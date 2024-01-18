import client from "../../../../libs/configs/prisma";

/**
 * Deletes the album data for a user.
 *
 * @param albumId - The ID of the album to delete.
 * @returns A Promise that resolves to void.
 */
export default async function deleteUserAlbumData(
  albumId: number
): Promise<void> {
  await client.album.delete({
    where: { id: albumId },
  });
}
