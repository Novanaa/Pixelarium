import client from "../../../../libs/configs/prisma";
import { ClientKey } from "../../../../../generated/client";
import logger from "../../../../libs/configs/logger";

/**
 * Finds a user's client keys based on the user's id.
 *
 * @param {number} id - The user's id.
 * @returns {Promise<ClientKey | null>} - A promise that resolves to the user's client keys or null if the client keys could not be found or an error occurred.
 */
export default async function findUserClientKeys(
  id: number
): Promise<ClientKey | null> {
  try {
    // Find a unique ClientKey record by querying the user_id property.
    const userClientKeys: Awaited<ClientKey | null> =
      await client.clientKey.findUnique({
        where: { user_id: id },
      });

    // If a record is found, return it. Otherwise, return null.
    return userClientKeys;
  } catch (err) {
    // In case of an error, log the error message and return null.
    logger.error(err);
    return null;
  }
}
