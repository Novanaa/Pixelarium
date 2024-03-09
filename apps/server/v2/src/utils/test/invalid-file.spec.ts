import { test, expect, describe } from "bun:test";
import type { default as FileData } from "@/interfaces/file";
import invalidFile from "../invalid-file";
import dummyFile from "@/test/dummy-file";
import filetestPath from "@/constant/filetest-path";

describe("Invalid File", () => {
  test("should be return true when the file is not a picture", () => {
    const file: FileData = dummyFile(filetestPath.json);

    expect(invalidFile(file.mimetype)).toBeTrue();
  });
  test("should be return false when the file is a picture", () => {
    const file: FileData = dummyFile(filetestPath.jpeg);

    expect(invalidFile(file.mimetype)).toBeFalse();
  });
  test("should be return true when the file mime type is not a mime type", () => {
    expect(invalidFile("")).toBeTrue();
  });
});
