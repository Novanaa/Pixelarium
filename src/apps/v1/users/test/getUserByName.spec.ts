import { expect, test, describe } from "bun:test";
import getUserByName from "../services/getUserByName";
import client from "../../../../libs/configs/prisma";
import type UserWithoutPassword from "../interfaces/types/UserWithoutPasswordTypes";
import { User } from "../../../../../generated/client";

describe("Unit-Testing Get User by Name Users Services", () => {
  test("returned value should be defined", async () => {
    const user: Awaited<User | null> = await client.user.findFirst();
    const returnedUser: Awaited<UserWithoutPassword | null> =
      await getUserByName(user?.name || "ItsNvaa");

    expect(returnedUser).toBeDefined();
  });
  test("returned value should be match the returned user object", async () => {
    const user: Awaited<User | null> = await client.user.findFirst();
    const returnedUser: Awaited<UserWithoutPassword | null> =
      await getUserByName(user?.name || "ItsNvaa");

    console.log(returnedUser);
    expect(returnedUser).toMatchObject({ name: user?.name });
  });
});
