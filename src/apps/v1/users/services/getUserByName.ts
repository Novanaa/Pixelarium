import client from "../../../../libs/configs/prisma";
import type { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";

export default async function getUserByName(
  name: string
): Promise<UserWithOptionalChaining | null> {
  const user: Awaited<UserWithOptionalChaining | null> =
    await client.user.findUnique({
      where: { name },
    });

  delete user?.password;
  delete user?.email;

  return user;
}
