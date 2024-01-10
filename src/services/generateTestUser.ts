import client from "../libs/configs/prisma";
import logger from "../libs/configs/logger";
import { User } from "../../generated/client";
import createTestUser from "../tests/utils/createTestUser";

/**
 * A function to generate a test user in the database.
 * The function checks if a user with the specified provider ID exists.
 * If the user does not exist, a new user with the given data is created.
 *
 * @returns {Promise<void>}
 */
export default async function generateTestUser(): Promise<void> {
  try {
    // Set the user provider ID for which the function will search or create a user
    const userProviderId: number = 123;

    // Check if a user with the given provider ID exists
    const user: Awaited<User | null> = await client.user.findUnique({
      where: { provider_id: userProviderId },
    });

    // If a user with the given provider ID does not exist, create a new user
    if (!user) {
      Promise.all([
        createTestUser({
          providerId: 321,
          plan: "Netherite",
          status: "active",
          options: {
            emptyPicture: false,
            is_external_picture: false,
          },
        }),
        createTestUser({
          providerId: 123,
          plan: "Netherite",
          status: "deactive",
          options: {
            emptyPicture: false,
            is_external_picture: false,
          },
        }),
        createTestUser({
          providerId: 898,
          plan: "none",
          status: "deactive",
          options: {
            emptyPicture: false,
            is_external_picture: false,
          },
        }),
        createTestUser({
          providerId: 1,
          plan: "Gold",
          status: "active",
          options: {
            emptyPicture: false,
            is_external_picture: false,
          },
        }),
        createTestUser({
          providerId: 2,
          plan: "Diamond",
          status: "active",
          options: {
            is_external_picture: false,
            emptyPicture: false,
          },
        }),
        createTestUser({
          providerId: 3,
          plan: "Diamond",
          status: "active",
          options: {
            emptyPicture: true,
            is_external_picture: false,
          },
        }),
        createTestUser({
          providerId: 4,
          plan: "Diamond",
          status: "active",
          options: {
            emptyPicture: false,
            is_external_picture: true,
          },
        }),
        createTestUser({
          providerId: 5,
          plan: "Gold",
          status: "active",
          options: {
            emptyPicture: false,
            is_external_picture: true,
          },
        }),
        createTestUser({
          providerId: 6,
          plan: "none",
          status: "deactive",
          options: {
            emptyPicture: false,
            is_external_picture: true,
          },
        }),
        createTestUser({
          providerId: 7,
          plan: "Netherite",
          status: "deactive",
          options: {
            emptyPicture: false,
            is_external_picture: true,
          },
        }),
        createTestUser({
          providerId: 8,
          plan: "Netherite",
          status: "active",
          options: {
            emptyPicture: false,
            is_external_picture: true,
          },
        }),
      ]);
    }
  } catch (err) {
    logger.error(err);
    throw new Error("The operation cannot be proccess");
  } finally {
    await client.$disconnect();
  }
}
