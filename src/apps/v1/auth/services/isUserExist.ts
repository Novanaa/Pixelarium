import client from "../../../../libs/configs/prisma";
import { User } from "../../../../../generated/client";

export default async function isUserExists({
  providerId,
}: {
  providerId: bigint;
}): Promise<User | null> {
  const isUser: Awaited<User | null> = await client.user.findUnique({
    where: { provider_id: providerId },
  });

  return isUser;
}

export async function isUser(id: string): Promise<User | null> {
  const isUser: Awaited<User | null> = await client.user.findUnique({
    where: { id: Number(id) || 0 },
  });

  return isUser;
}
