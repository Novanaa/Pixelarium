import { User } from "../../../../../generated/client";
import logger from "../../../../libs/configs/logger";
import client from "../../../../libs/configs/prisma";

export default async function getLatestUserProfilePicture(
  id: string
): Promise<string | null | undefined> {
  try {
    const user: Awaited<User | null> = await client.user.findUnique({
      where: { id: Number(id) },
    });

    return user?.picture;
  } catch (err) {
    logger.error(err);
    return null;
  }
}
