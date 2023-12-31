// Importing the Gallery model from the generated client
import { Gallery, Picture } from "../../../../../generated/client";

// Importing the client configuration for accessing the database
import client from "../../../../libs/configs/prisma";

export interface UserGallery extends Gallery {
  pictures: Array<Picture>;
}

/**
 * Fetches the gallery for a given user from the database.
 *
 * @param userId - The unique identifier for the user whose gallery is being fetched.
 * @returns The Gallery object corresponding to the given userId. If no gallery is found for the given userId, returns null.
 */
export default async function getUserGallery(
  userId: number
): Promise<UserGallery> {
  // Use the client to find the gallery with the specified userId.
  // The await keyword ensures that the function will wait for the query to complete before returning the result.
  const gallery: Awaited<Gallery | null> = await client.gallery.findUnique({
    where: { user_id: userId },
  });

  const userGalleryPictures: Awaited<Array<Picture>> =
    await client.picture.findMany({
      where: { gallery_id: gallery?.id || 0 },
    });

  const userGallery: UserGallery = {
    ...gallery!,
    pictures: userGalleryPictures,
  };

  // Return the user's gallery, or null if no gallery is found for the given userId.
  return userGallery;
}
