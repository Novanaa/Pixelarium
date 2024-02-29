import { expect, test, describe } from "bun:test";
import client from "../../libs/configs/prisma";
import {
  isUserExistByIdOrProviderId,
  isUserExistByNameOrEmail,
} from "../isUser";
import { User } from "../../../packages/prisma/generated/client";

describe("Unit-Testing isUserExistByIdOrProviderId and isUserExistByNameOrEmail Utilities", () => {
  describe("Unit-Testing isUserExistByIdOrProviderId", () => {
    test("ID - should be return null if the user cannot be found", async () => {
      const isUser: Awaited<User | null> = await isUserExistByIdOrProviderId({
        field: "id",
        value: 0,
      });

      expect(isUser).toBeNull();
    });
    test("ProviderID - should be return null if the user cannot be found", async () => {
      const isUser: Awaited<User | null> = await isUserExistByIdOrProviderId({
        field: "provider_id",
        value: 0,
      });

      expect(isUser).toBeNull();
    });
    test("ID - should be return user data", async () => {
      const user: Awaited<User | null> = await client.user.findFirst();
      const isUser: Awaited<User | null> = await isUserExistByIdOrProviderId({
        field: "id",
        value: user?.id,
      });

      console.log(isUser);
      expect(isUser).toBeDefined();
      // @ts-expect-error Nullable error
      expect(isUser).toMatchObject(user);
    });
    test("ProviderID - should be return user data", async () => {
      const user: Awaited<User | null> = await client.user.findFirst();
      const isUser: Awaited<User | null> = await isUserExistByIdOrProviderId({
        field: "provider_id",
        value: user?.provider_id,
      });

      console.log(isUser);
      expect(isUser).toBeDefined();
      // @ts-expect-error Nullable error
      expect(isUser).toMatchObject(user);
    });
    test("should be return null if the field is not valid", async () => {
      const user: Awaited<User | null> = await client.user.findFirst();
      const isUser: Awaited<User | null> = await isUserExistByIdOrProviderId({
        // @ts-expect-error Undefined field 'test'
        field: "test",
        value: user?.id,
      });

      expect(isUser).toBeNull();
    });
    test("should be return null if the field is not filled", async () => {
      const user: Awaited<User | null> = await client.user.findFirst();
      // @ts-expect-error Unfilled field params
      const isUser: Awaited<User | null> = await isUserExistByIdOrProviderId({
        value: user?.provider_id,
      });

      expect(isUser).toBeNull();
    });
  });

  describe("Unit-Testing isUserExistByNameOrEmail", () => {
    test("Email - should be return null if the user cannot be found", async () => {
      const isUser: Awaited<User | null> = await isUserExistByNameOrEmail({
        field: "email",
        value: "test",
      });

      expect(isUser).toBeNull();
    });
    test("Name - should be return null if the user cannot be found", async () => {
      const isUser: Awaited<User | null> = await isUserExistByNameOrEmail({
        field: "name",
        value: "0",
      });

      expect(isUser).toBeNull();
    });
    test("should be return null if the field is not valid", async () => {
      const isUser: Awaited<User | null> = await isUserExistByNameOrEmail({
        // @ts-expect-error Undefined field 'test'
        field: "test",
        value: "test",
      });

      expect(isUser).toBeNull();
    });
    test("should be return null if the field is not filled", async () => {
      // @ts-expect-error Unfilled field params
      const isUser: Awaited<User | null> = await isUserExistByNameOrEmail({
        value: "test",
      });

      expect(isUser).toBeNull();
    });
    test("Name - should be return user data", async () => {
      const user: Awaited<User | null> = await client.user.findFirst();
      const isUser: Awaited<User | null> = await isUserExistByNameOrEmail({
        field: "name",
        value: user?.name || "ItsNvaa",
      });

      console.log(isUser);
      expect(isUser).toBeDefined();
      // @ts-expect-error Nullable error
      expect(isUser).toMatchObject(user);
    });
  });
});
