import prisma from "@/libs/prisma";
import { User } from "prisma/generated/client";

/**
 * This TypeScript function asynchronously retrieves a user by their name using Prisma and returns
 * either a User object or null.
 * @param {string} name - The `getUser` function is an asynchronous function that takes a `name`
 * parameter of type `string`. It returns a `Promise` that resolves to either a `User` object or
 * `null`. The function uses `prisma` to find a unique user based on the provided `name`.
 * @returns The `getUser` function is returning a `Promise` that resolves to either a `User` object or
 * `null`.
 */
export default async function getUser(name: string): Promise<User | null> {
  try {
    return (await prisma.user.findUnique({
      where: { name },
    })) satisfies User | null;
  } finally {
    await prisma.$disconnect();
  }
}
