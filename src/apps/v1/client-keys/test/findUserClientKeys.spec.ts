import { test, expect, describe } from "bun:test";
import client from "../../../../libs/configs/prisma";
import { ClientKey, User } from "../../../../../generated/client";
import findUserClientKeys from "../services/findUserClientKeys";

describe("Unit-Testing Find User Client Keys Utilities", () => {
  test("should be return client keys user data", async () => {
    const user: Awaited<User | null> = await client.user.findFirst();
    const userClientKeys: Awaited<ClientKey | null> = await findUserClientKeys(
      user?.id || 0
    );

    console.log(userClientKeys);
    expect(userClientKeys).not.toBeUndefined();
    expect(userClientKeys).toBeDefined();
  });
  test("returned value should be have client_secret property", async () => {
    const user: Awaited<User | null> = await client.user.findFirst();
    const userClientKeys: Awaited<ClientKey | null> = await findUserClientKeys(
      user?.id || 0
    );

    expect(userClientKeys).toHaveProperty("client_secret");
  });
  test("returned value should be have client_id property", async () => {
    const user: Awaited<User | null> = await client.user.findFirst();
    const userClientKeys: Awaited<ClientKey | null> = await findUserClientKeys(
      user?.id || 0
    );

    expect(userClientKeys).toHaveProperty("client_id");
  });
});
