import { test, expect, describe } from "bun:test";
import blankPayload from "../blank-payload";

describe("Blank Payload", () => {
  test("should be return true when the payload object is empty", () => {
    expect(blankPayload(new Object())).toBeTrue();
  });
  test("should be return false when the payload object is not empty", () => {
    expect(blankPayload(new Object({ test: "test" }))).toBeFalse();
  });
});
