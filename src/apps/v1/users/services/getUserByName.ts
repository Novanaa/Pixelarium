import { User } from "../../../../../generated/client";
import client from "../../../../libs/configs/prisma";

export default async function getUserByName(
  name: string
): Promise<User | null> {
  const user: Awaited<User | null> = await client.user.findUnique({
    where: { name },
  });

  return user;
}
