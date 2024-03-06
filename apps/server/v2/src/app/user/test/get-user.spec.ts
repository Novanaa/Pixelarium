/* eslint-disable no-console */
import { expect, describe, test } from "bun:test";
import getUser from "../services/get-user";
import prisma from "@/libs/prisma";
import { User } from "prisma/generated/client";

describe("TEST / Get User", () => {
  test("should be return null", async () => {
    expect(await getUser("0")).toBeNull();
  });
  test("should be return user data", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();

    console.log(user);
    expect(await getUser(user?.name as string)).not.toBeNull();
  });
  test("user data should be match to requested user data", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();

    console.log(user);
    expect(JSON.stringify(await getUser(user?.name as string))).toMatch(
      JSON.stringify(user)
    );
  });
});