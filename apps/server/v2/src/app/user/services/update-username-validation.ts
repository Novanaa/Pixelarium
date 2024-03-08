import prisma from "@/libs/prisma";
import usernameValidation from "@/services/username-validation";
import getUser from "./get-user";
import { User } from "prisma/generated/client";
import error from "@/utils/error";
import { ErrorResponse } from "@/utils/interfaces/error-response";

/**
 * The function `updateUsernameValidation` checks if a username is valid and not already taken in a
 * database.
 * @param {string} name - The `updateUsernameValidation` function is an asynchronous function that
 * takes a `name` parameter of type string. This function performs validation on the provided username
 * and checks if it is already taken by an existing user. If the username is valid and not already in
 * use, the function completes successfully. Otherwise,
 * @returns The function `updateUsernameValidation` returns a `Promise` that resolves to an
 * `ErrorResponse` object if there is an error during the username validation process. If the username
 * is valid and not already taken, the function does not return anything (void).
 */
export default async function updateUsernameValidation(
  name: string
): Promise<ErrorResponse | void> {
  const verifyUsernameError: Awaited<string | void> =
    await usernameValidation(name);

  if (verifyUsernameError) return error.badRequest(verifyUsernameError);

  const searchUser: Awaited<User | null> = await getUser(name);

  if (searchUser) {
    await prisma.$disconnect();

    return error.badRequest(
      "The username has already taken, please choose another username."
    );
  }

  await prisma.$disconnect();
}
