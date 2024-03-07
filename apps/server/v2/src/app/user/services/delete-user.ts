import prisma from "@/libs/prisma";
import { User } from "prisma/generated/client";

/**
 * This TypeScript function deletes user data based on the provided name using Prisma and returns the
 * deleted user.
 * @param {string} name - The `deleteUserData` function is an asynchronous function that takes a `name`
 * parameter of type `string`. This function deletes a user record from the database using Prisma
 * client's `delete` method based on the provided `name`. The function returns a Promise that resolves
 * to the deleted user object.
 * @returns The `deleteUserData` function is returning a Promise that resolves to a `User` object after
 * deleting the user data with the specified name using Prisma.
 */
export default async function deleteUserData(name: string): Promise<User> {
  try {
    return (await prisma.user.delete({
      where: {
        name,
      },
    })) as User;
  } finally {
    await prisma.$disconnect();
  }
}
