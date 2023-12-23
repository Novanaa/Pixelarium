import { ClientKey } from "../../../generated/client";
import client from "../../libs/configs/prisma";

type TGetTestUserClientKeysRetunedType = {
  clien_id: string | null;
  client_secret: string | null;
};

/**
 * getTestUserClientKeys is an async function that retrieves the client keys (client_id and client_secret) for a user with a specific userId.
 *
 * @param userId - The unique identifier for the user.
 * @returns {TGetTestUserClientKeysRetunedType | null} - Returns an object containing the client_id and client_secret if found, otherwise returns null.
 */
export default async function getTestUserClientKeys(
  userId: number
): Promise<TGetTestUserClientKeysRetunedType | null> {
  const userClientKeys: Awaited<ClientKey | null> =
    await client.clientKey.findUnique({
      where: { user_id: userId },
    });

  return {
    clien_id: userClientKeys?.client_id || null,
    client_secret: userClientKeys?.client_secret || null,
  };
}
