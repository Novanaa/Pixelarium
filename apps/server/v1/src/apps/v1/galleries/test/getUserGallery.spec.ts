import { test, expect, describe } from "bun:test";
import getUserGallery from "../services/getUserGallery";
import payload from "../../../../tests/const/payload";
import getTestUser from "../../../../tests/utils/getTestUser";
import { Gallery, User } from "../../../../../packages/prisma/generated/client";

describe("Unit-Test Get User Gallery Services", () => {
  test("should be return user gallery data", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userGallery: Awaited<Gallery | null> = await getUserGallery(
      user?.id!
    );

    console.log(userGallery);
    expect(userGallery).not.toBeEmpty();
  });
  test("retunred value should be defined", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userGallery: Awaited<Gallery | null> = await getUserGallery(
      user?.id!
    );

    console.log(userGallery);
    expect(userGallery).toBeDefined();
    expect(userGallery).not.toBeUndefined();
  });
  test("retunred value should be not null", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userGallery: Awaited<Gallery | null> = await getUserGallery(
      user?.id!
    );

    console.log(userGallery);
    expect(userGallery).toBeDefined();
    expect(userGallery).not.toBeNull();
  });
});
