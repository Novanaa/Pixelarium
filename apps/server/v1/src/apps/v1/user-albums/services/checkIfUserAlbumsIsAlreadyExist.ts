import { Album } from "../../../../../packages/prisma/generated/client";
import client from "../../../../libs/configs/prisma";

/**
 * Checks if a user album with the given name already exists.
 *
 * @param albumName - The name of the album to check.
 * @returns A Promise that resolves to a boolean indicating whether the album already exists (true) or not (false).
 */
export default async function checkIfUserAlbumsIsAlreadyExist(
  albumName: string
): Promise<boolean> {
  const queryResult: Awaited<Array<Album>> = await client.album.findMany({
    where: { title: albumName },
  });

  return !queryResult.length;
}
