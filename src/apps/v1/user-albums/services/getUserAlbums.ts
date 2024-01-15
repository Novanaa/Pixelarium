import { Album } from "../../../../../generated/client";
import client from "../../../../libs/configs/prisma";

/**
 * Retrieves the albums of a user.
 *
 * @param userId - The ID of the user.
 * @returns A promise that resolves to an array of albums.
 * @throws {Error} If the user ID is not provided.
 */
export default async function getUserAlbums(
  userId: number
): Promise<Array<Album>> {
  if (!userId) throw new Error("User Id must be provided!");

  const albums: Awaited<Array<Album>> = await client.album.findMany({
    where: {
      user_id: userId,
    },
  });

  return albums;
}
