import { expect, test, describe } from "bun:test";
import getLatestUserProfilePicture from "../services/getLatestUserProfilePicture";
import client from "../../../../libs/configs/prisma";
import { User } from "../../../../../packages/prisma/generated/client";

describe("unit-Testing Get Latest User Profile Picture Utils", () => {
  test("returned value data types must be string", async () => {
    const user: Awaited<User | null> = await client.user.findFirst();
    const latestUserProfilePicture: Awaited<string | null | undefined> =
      await getLatestUserProfilePicture(String(user?.id));

    expect(latestUserProfilePicture).toBeString();
  });
  test("returned value should be defined", async () => {
    const user: Awaited<User | null> = await client.user.findFirst();
    const latestUserProfilePicture: Awaited<string | null | undefined> =
      await getLatestUserProfilePicture(String(user?.id));

    expect(latestUserProfilePicture).toBeDefined();
  });
});
