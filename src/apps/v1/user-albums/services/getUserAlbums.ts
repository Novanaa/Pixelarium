import { Album } from "../../../../../generated/client";
import client from "../../../../libs/configs/prisma";

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
