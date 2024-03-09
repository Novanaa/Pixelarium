import fs from "fs";
import { test, expect, describe, afterAll } from "bun:test";
import invalidPicture from "../invalid-picture";
import filetestPath from "@/constant/filetest-path";

afterAll(() => {
  fs.writeFileSync(filetestPath.broken, "");
  fs.writeFileSync(
    filetestPath.json,
    JSON.stringify({
      name: "just a test file",
      description: "just another test file!!!",
    })
  );
});

describe("Invalid Picture", () => {
  test("should be return false when the picture is not a broken picture", async () => {
    expect(await invalidPicture(filetestPath.jpeg)).toBe(false);
  });
  test("should be return true when the file is not a picture", async () => {
    expect(await invalidPicture(filetestPath.json)).toBe(true);
  });
  test("should be return true when the picture file is broken", async () => {
    expect(await invalidPicture(filetestPath.broken)).toBe(true);
  });
});
