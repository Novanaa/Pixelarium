import { test, expect, describe } from "bun:test";
import invalidPictureExtension from "../invalid-picture-ext";

describe("Invalid Picture Extension", () => {
  test("should be return false if the picture extension is supported", () => {
    expect(invalidPictureExtension(".png")).toBeFalse();
  });
  test("should be return true if the picture extension is not supported", () => {
    expect(invalidPictureExtension(".sgi")).toBeTrue();
  });
  test("should be return true if the picture extension is not valid", () => {
    expect(invalidPictureExtension("testtt")).toBeTrue();
  });
  test("should be return true if the picture extension is not defined", () => {
    expect(invalidPictureExtension("")).toBeTrue();
  });
});
