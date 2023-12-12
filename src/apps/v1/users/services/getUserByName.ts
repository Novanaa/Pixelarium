import client from "../../../../libs/configs/prisma";
import type UserWithoutPassword from "../interfaces/types/UserWithoutPasswordTypes";

export default async function getUserByName(
  name: string
): Promise<UserWithoutPassword | null> {
  const user: Awaited<UserWithoutPassword | null> =
    await client.user.findUnique({
      where: { name },
      select: {
        id: true,
        provider_id: true,
        name: true,
        email: true,
        bio: true,
        picture: true,
        type: true,
        site_admin: true,
        createdAt: true,
        updatedAt: true,
        password: false,
      },
    });

  return user;
}
