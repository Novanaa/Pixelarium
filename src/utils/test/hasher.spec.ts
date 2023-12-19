import { CryptoHasher } from "bun";
import newHasher from "../hasher";
import { describe, test, expect } from "bun:test";

describe("Unit-Testing newHarsher Utilities", () => {
  const hasher: CryptoHasher = newHasher("md5");
  test("should be return type of string", () => {
    hasher.update("hello world!!!");

    expect(hasher.digest("hex")).toBeString();
  });
  test("should be returned value should be defined", () => {
    hasher.update("hello world!!!");

    expect(hasher.digest("hex")).toBeDefined();
  });
  test("should be returned value should be not null", () => {
    hasher.update("hello world!!!");

    expect(hasher.digest("hex")).not.toBeUndefined();
  });
  test("should be returned value should be not null", () => {
    hasher.update("hello world!!!");

    expect(hasher.digest("hex")).not.toBeUndefined();
  });
});
