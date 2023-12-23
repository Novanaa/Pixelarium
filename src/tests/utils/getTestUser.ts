// Importing the User type from the generated client folder
import { User } from "../../../generated/client";
import logger from "../../libs/configs/logger";

// Importing the Prisma client instance
import client from "../../libs/configs/prisma";

/**
 * Retrieves a test user by their provider ID.
 *
 * @param providerId - The provider ID of the test user to retrieve.
 * @returns A Promise resolving to the retrieved test user or null if not found.
 */
export default async function getTestUser(
  providerId: number
): Promise<User | null> {
  try {
    // Query the database for a user with the specified provider ID
    const testUser: Awaited<User | null> = await client.user.findUnique({
      where: { provider_id: providerId },
    });

    // If no user is found, throw an error
    if (!testUser) throw new Error("Test User Doesn't found");

    // If a user is found, return it
    return testUser;
  } catch (err) {
    // Re-throw the error for proper error handling
    logger.error(err);
    return null;
  }
}
