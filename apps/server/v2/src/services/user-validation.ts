import getUser from "@/app/user/services/get-user";
import prisma from "@/libs/prisma";
import error from "@/utils/error";
import { ErrorResponse } from "@/utils/interfaces/error-response";
import { User } from "prisma/generated/client";

export interface GetUserWithValidation {
  user: User;
  error: ErrorResponse | null;
}

/**
 * This TypeScript function retrieves a user with validation and returns either the user object or an
 * error response.
 * @param {string} name - The `name` parameter in the `getUserWithValidation` function is a string
 * representing the name of the user you want to retrieve from the database.
 * @returns The function `getUserWithValidation` returns a `Promise` that resolves to either a `User`
 * object if the user is found, or an `ErrorResponse` object if the user is not found.
 */
export default async function getUserWithValidation(
  name: string
): Promise<GetUserWithValidation> {
  const user: Awaited<User | null> = await getUser(name);

  if (!user) {
    await prisma.$disconnect();

    const notFound: ErrorResponse = error.notFound(
      "The user was doesn't exist, please try again with another account!"
    );

    return { user: new Object() as User, error: notFound };
  }

  await prisma.$disconnect();

  // @ts-expect-error optional error
  delete user.email;
  // @ts-expect-error optional error
  delete user.password;

  return { user, error: null };
}
