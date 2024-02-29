// Import the client instance from the config file
import client from "../../../../libs/configs/prisma";

/**
 * A function to delete the user's client secret
 *
 * @param id - The id of the user whose client secret needs to be deleted
 * @returns void
 */
export default async function deleteUserClientSecret(
  id: number
): Promise<void> {
  /**
   * Update the clientKey entry in the database where the user_id matches the given id.
   *
   * The client_secret field will be set to null, effectively deleting the client secret.
   */
  await client.clientKey.update({
    where: { user_id: id },
    data: {
      user: { connect: { id: id } },
      client_secret: null,
    },
  });
}
