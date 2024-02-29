import {
  Album,
  Picture,
} from "../../../../../packages/prisma/generated/client";
import client from "../../../../libs/configs/prisma";
import UserAlbums from "../interfaces/UserAlbums";

/**
 * Retrieves a user album by its ID.
 *
 * @param albumId - The ID of the album to retrieve.
 * @returns A Promise that resolves to a UserAlbums object if the album is found, or null if not found.
 */
export default async function getUserAlbum(
  albumId: number
): Promise<UserAlbums | null> {
  const album: Awaited<Album | null> = await client.album.findUnique({
    where: { id: albumId },
  });

  const albumPictures: Awaited<Array<Picture>> = await client.picture.findMany({
    where: { album_id: album?.id || 0 },
  });

  const userAlbum: UserAlbums = {
    ...album!,
    pictures: albumPictures,
  };

  if (!album && !albumPictures.length) return null;

  return userAlbum;
}
