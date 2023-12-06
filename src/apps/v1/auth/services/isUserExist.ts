import client from "../../../../libs/configs/prisma";
import { User } from "../../../../../generated/client";

export default async function isUserExists({
  name,
  email,
}: {
  name: string;
  email: string;
}): Promise<User[]> {
  const isUser: Awaited<User[]> = await client.user.findMany({
    where: { name, email },
  });

  return isUser;
}
