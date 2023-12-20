// Import the client instance from the config file.
import client from "../../../../libs/configs/prisma";

/**
 * The function `insertUserClientSecret` connects to the Prisma client and creates a new client key for the specified user.
 *
 * @param userId - The unique identifier of the user.
 * @param secret - The client secret to be associated with the user.
 *
 * @returns A Promise that resolves when the client key is successfully created.
 */
export default async function insertUserClientSecret({
  userId,
  secret,
}: {
  userId: number;
  secret: string;
}): Promise<void> {
  /**
   * Connect to the Prisma client and create a new client key.
   *
   * @remarks
   * The `connect` keyword is used to establish a relationship between the user and the client key.
   * The `client_secret` is set to the secret passed to the function.
   */
  await client.clientKey.update({
    where: { user_id: userId },
    data: {
      user: { connect: { id: userId } },
      client_secret: secret,
    },
  });
}
