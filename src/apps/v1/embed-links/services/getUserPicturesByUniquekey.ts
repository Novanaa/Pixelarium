import { Picture } from "../../../../../generated/client";
import client from "../../../../libs/configs/prisma";

/**
 * Retrieves a user picture by its unique key.
 *
 * @param uniquekey The unique key of the picture.
 * @returns A Promise that resolves to the user picture, or null if not found.
 * @throws Error if the unique key is not provided.
 */
export default async function getUserPicturesByUniquekey(
  uniquekey: string
): Promise<Picture | null> {
  if (!uniquekey) throw new Error("Picture uniquekey must be provided");

  const userPicture: Awaited<Picture | null> = await client.picture.findUnique({
    where: { uniquekey },
  });

  return userPicture;
}
