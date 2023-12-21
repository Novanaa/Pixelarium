import client from "../libs/configs/prisma";
import logger from "../libs/configs/logger";
import { User } from "../../generated/client";
import { isUserExistByIdOrProviderId } from "../utils/isUser";

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
      await client.user.create({
        data: {
          provider_id: userProviderId,
          name: "John Doe",
          email: "john.doe@example.com",
          password: null,
          picture: "https://example.com/john-doe.jpg",
          type: "User",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      });

      const isUser: Awaited<User | null> = await isUserExistByIdOrProviderId({
        field: "provider_id",
        value: userProviderId,
      });

      if (isUser) {
        await client.subcription.create({
          data: {
            user: { connect: { id: isUser.id } },
            plan: "Netherite",
            status: "active",
          },
        });
      }
    }
  } catch (err) {
    logger.error(err);
    throw new Error("The operation cannot be proccess");
  } finally {
    await client.$disconnect();
  }
}
