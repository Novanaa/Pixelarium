import prisma from "@/libs/prisma";
import usernameValidation from "@/services/username-validation";
import getUser from "./get-user";
import { User } from "prisma/generated/client";
import UpdateUserPayload from "../interfaces/update-user-payload";
import error from "@/utils/error";
import { ErrorResponse } from "@/utils/interfaces/error-response";

interface UpdateUsernameValidationParams {
  payload: UpdateUserPayload;
}

/**
 * The function `updateUsernameValidation` performs validation checks on a new username and returns an
 * error message if the username is already taken.
 * @param {UpdateUsernameValidationParams}  - The code you provided is an async function named
 * `updateUsernameValidation` that takes an object as a parameter with properties `payload` and
 * `reply`. The function performs the following steps:
 * @returns The function `updateUsernameValidation` is returning either an error message if the
 * username validation fails or if the username is already taken, or it will disconnect from the Prisma
 * client and return nothing if the validation passes.
 */
export default async function updateUsernameValidation({
  payload,
}: UpdateUsernameValidationParams): Promise<ErrorResponse | void> {
  const verifyUsernameError: Awaited<string | void> = await usernameValidation(
    payload.name
  );

  if (verifyUsernameError) return error.badRequest(verifyUsernameError);

  const searchUser: Awaited<User | null> = await getUser(payload.name);

  if (searchUser) {
    await prisma.$disconnect();

    return error.badRequest(
      "The username has already taken, please choose another username."
    );
  }

  await prisma.$disconnect();
}
