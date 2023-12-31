import { test, expect, describe } from "bun:test";
import findUserGallery from "../utils/findUserGallery";
import getTestUser from "../../../../tests/utils/getTestUser";
import payload from "../../../../tests/const/payload";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import { Gallery } from "../../../../../generated/client";

describe("Unit-Testing Find User Gallery Utils", () => {
  test("should be return user gallery data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<Gallery | null> = await findUserGallery(
      user?.id || 0
    );

    console.log(userGallery);
    expect(userGallery).not.toBeEmpty();
  });
  test("returned value should be defined", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<Gallery | null> = await findUserGallery(
      user?.id || 0
    );

    console.log(userGallery);
    expect(userGallery).not.toBeUndefined();
    expect(userGallery).toBeDefined();
  });
  test("returned value should be null", async () => {
    const userGallery: Awaited<Gallery | null> = await findUserGallery(0);

    console.log(userGallery);
    expect(userGallery).toBeNull();
  });
});
