/* eslint-disable no-console */

import { test, expect, describe, afterAll } from "bun:test";
import getUserWithValidation, {
  GetUserWithValidation,
} from "../user-validation";
import { User } from "prisma/generated/client";
import prisma from "@/libs/prisma";
import error from "@/utils/error";
import UserWithOptionalChaining from "@/interfaces/user";

afterAll(async () => await prisma.$disconnect());

describe("Get User With Validation", () => {
  test("destructured error must be return null", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const { error }: Awaited<GetUserWithValidation> =
      await getUserWithValidation(user?.name || "jonh_doe");

    console.log(error);
    expect(error).toBeNull();
  });
  test("error must be an empty object when the error is not null", async () => {
    const { user }: Awaited<GetUserWithValidation> =
      await getUserWithValidation("0");

    console.log(user);
    expect(Object.keys(user).length).toBe(0);
  });
  test("user should be return user data", async () => {
    const findUser: Awaited<UserWithOptionalChaining | null> =
      await prisma.user.findFirst();
    const { user }: Awaited<GetUserWithValidation> =
      await getUserWithValidation(findUser?.name || "john_doe");

    delete findUser?.email;
    delete findUser?.password;

    console.log(user);
    expect(JSON.stringify(user)).toBe(JSON.stringify(findUser));
  });
  test("error messege should be return not found instance error", async () => {
    const { error: userError }: Awaited<GetUserWithValidation> =
      await getUserWithValidation("0");

    console.log(userError);
    expect(userError).toMatchObject(
      error.notFound(
        "The user was doesn't exist, please try again with another account!"
      )
    );
  });
  test("destructured error must be return error messege", async () => {
    const { error: userError }: Awaited<GetUserWithValidation> =
      await getUserWithValidation("0");

    console.log(userError);
    expect(userError).toEqual(
      error.notFound(
        "The user was doesn't exist, please try again with another account!"
      )
    );
  });
  test("error messege must be equal to => 'The user was doesn't exist, please try again with another account!'", async () => {
    const { error: userError }: Awaited<GetUserWithValidation> =
      await getUserWithValidation("0");

    console.log(userError);
    expect(userError?.messege).toBe(
      "The user was doesn't exist, please try again with another account!"
    );
  });
});
