import { ClientKey } from "../../../packages/prisma/generated/client";
import client from "../../libs/configs/prisma";

/**
 * Retrieve the ClientKey object associated with a specific user ID.
 *
 * @param {number} userId - The ID of the user whose ClientKey to retrieve.
 * @returns {Promise<ClientKey | null>} A Promise that resolves to the retrieved ClientKey object, or null if no such object exists.
 */
export default async function getTestUserClientKeys(
  userId: number
): Promise<ClientKey | null> {
  const userClientKeys: Awaited<ClientKey | null> =
    await client.clientKey.findUnique({
      where: { user_id: userId },
    });

  return userClientKeys;
}
