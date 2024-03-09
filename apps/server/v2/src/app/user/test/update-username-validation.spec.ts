/* eslint-disable no-console */

import { test, expect, describe, afterAll } from "bun:test";
import updateUsernameValidation from "../services/update-username-validation";
import error from "@/utils/error";
import { ErrorResponse } from "@/utils/interfaces/error-response";
import { User } from "prisma/generated/client";
import prisma from "@/libs/prisma";

afterAll(() => prisma.$disconnect());

describe("Update Username Validation", () => {
  test("should be return bad request error when usename has capital letter", async () => {
    const instance: Awaited<void | ErrorResponse> =
      await updateUsernameValidation("Testtt");

    console.log(instance);
    expect(instance).toEqual(
      error.badRequest(
        "Username with uppercase letter should not allowed, please choose another username."
      )
    );
  });
  test("should be return bad request error when usename has a symbol", async () => {
    const instance: Awaited<void | ErrorResponse> =
      await updateUsernameValidation("@testtt");

    console.log(instance);
    expect(instance).toEqual(
      error.badRequest(
        "Username should be 64 letters or less and is only allowed to contain alphanumeric, dot (.), hyphen (-) and underscore (_)."
      )
    );
  });
  test("should be return bad request error when usename has a whitespace", async () => {
    const instance: Awaited<void | ErrorResponse> =
      await updateUsernameValidation("te sttt");

    console.log(instance);
    expect(instance).toEqual(
      error.badRequest(
        "Username should be 64 letters or less and is only allowed to contain alphanumeric, dot (.), hyphen (-) and underscore (_)."
      )
    );
  });
  test("should be return bad request error when usename has a numberic number", async () => {
    const instance: Awaited<void | ErrorResponse> =
      await updateUsernameValidation("testtt11");

    console.log(instance);
    expect(instance).toEqual(
      error.badRequest(
        "Username with numberic number should not allowed, please choose another username."
      )
    );
  });
  test("should be return bad request error when usename has a already taken", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    console.log(user);
    const instance: Awaited<void | ErrorResponse> =
      await updateUsernameValidation(user?.name || "john doe");

    console.log(instance);
    expect(instance).toEqual(
      error.badRequest(
        "The username has already taken, please choose another username."
      )
    );
  });
  test("should be return void when username is not containing number, whitespace, and simbols", async () => {
    const instance: Awaited<void | ErrorResponse> =
      await updateUsernameValidation("testtt");

    expect(instance).toEqual(undefined);
  });
  test("should be return void when username include underscore", async () => {
    const instance: Awaited<void | ErrorResponse> =
      await updateUsernameValidation("test_");

    expect(instance).toEqual(undefined);
  });
  test("should be return void when username include hypen", async () => {
    const instance: Awaited<void | ErrorResponse> =
      await updateUsernameValidation("test-by");

    expect(instance).toEqual(undefined);
  });
  test("should be return void when username include dot", async () => {
    const instance: Awaited<void | ErrorResponse> =
      await updateUsernameValidation("test.test");

    expect(instance).toEqual(undefined);
  });
});
