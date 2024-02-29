// Importing the Gallery model from the generated client
import { Gallery } from "../../../../../packages/prisma/generated/client";
// Importing the client instance for the Prisma ORM
import client from "../../../../libs/configs/prisma";

/**
 * A function that retrieves the gallery associated with a given user ID.
 *
 * @param userId - The user ID to find the gallery for.
 * @returns The gallery associated with the given user ID, or null if not found.
 */
export default async function findUserGallery(
  userId: number
): Promise<Gallery | null> {
  /**
   * Fetching the gallery from the database where the user_id matches the given user ID.
   * If the gallery is found, it will be returned as a Gallery object.
   * If no gallery is found, null will be returned.
   */
  const gallery: Awaited<Gallery | null> = await client.gallery.findUnique({
    where: { user_id: userId },
  });

  // Returning the gallery
  return gallery;
}
