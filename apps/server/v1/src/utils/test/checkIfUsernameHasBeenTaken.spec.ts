import { expect, test, describe } from "bun:test";
import checkIfUsernameHasBeenTaken from "../checkIfUsernameHasBeenTaken";
import client from "../../libs/configs/prisma";
import { User } from "../../../packages/prisma/generated/client";

describe("Unit-Testing Check If Username Has Been Taken Utils", () => {
  test("should be return false if the username isn't taken", async () => {
    const username: Awaited<boolean | null> =
      await checkIfUsernameHasBeenTaken("wleeek");

    expect(username).toBeFalse();
  });
  test("should be return true", async () => {
    const user: Awaited<User | null> = await client.user.findFirst();
    const username: Awaited<boolean | null> = await checkIfUsernameHasBeenTaken(
      user?.name || "ItsNvaa"
    );

    expect(username).toBeTrue();
  });
});
