import { Picture } from "../../../../../packages/prisma/generated/client";
import client from "../../../../libs/configs/prisma";

/**
 * Retrieves a user picture by unique key.
 *
 * @param uniquekey The unique key of the picture.
 * @returns A Promise that resolves to the Picture object if found, or null if not found.
 * @throws Error if the unique key is not provided.
 */
export default async function getUserPictureByUniquekey(
  uniquekey: string
): Promise<Picture | null> {
  if (!uniquekey) throw new Error("Picture uniquekey must be provided");

  const picture: Awaited<Picture | null> = await client.picture.findUnique({
    where: { uniquekey },
  });

  return picture;
}
