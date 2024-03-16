import { test, expect, describe } from "bun:test";
import invalidCookies from "../utils/invalid-cookies";
import { AuthenticationCookies } from "@/interfaces/cookies";

describe("Invalid Cookies", () => {
  test("should be return true if the cookies object data is empty", () => {
    expect(invalidCookies(new Object() as AuthenticationCookies)).toBeTrue();
  });
  test("should be return true if the user session cookies data is undefined", () => {
    expect(
      invalidCookies(new Object({ test: "test" }) as AuthenticationCookies)
    ).toBeTrue();
  });
  test("should be return false if the user session cookies data is undefined", () => {
    expect(
      invalidCookies(new Object({ session: "test" }) as AuthenticationCookies)
    ).toBeFalse();
  });
});
