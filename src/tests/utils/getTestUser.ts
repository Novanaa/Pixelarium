// Importing the User type from the generated client folder
import { User } from "../../../generated/client";
import logger from "../../libs/configs/logger";

// Importing the Prisma client instance
import client from "../../libs/configs/prisma";

/**
 * Function to retrieve a test user from the database
 *
 * @returns A promise resolving to a User object or null if not found
 * @throws Error if the test user is not found
 */
export default async function getTestUser(): Promise<User | null> {
  try {
    // Attempt to find a unique user with a provider_id of 123
    const testUser: Awaited<User | null> = await client.user.findUnique({
      where: { provider_id: 123 },
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
