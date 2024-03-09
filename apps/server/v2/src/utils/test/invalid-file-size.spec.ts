import { test, expect, describe } from "bun:test";
import type { default as FileData } from "@/interfaces/file";
import invalidFileSize from "../invalid-file-size";
import dummyFile from "@/test/dummy-file";
import filetestPath from "@/constant/filetest-path";

describe("Invalid File Size", () => {
  test("should be return true if the file size is more than 1mb", () => {
    const file: FileData = dummyFile(filetestPath["20mb"]);

    expect(invalidFileSize({ file, size: 1 })).toBeTrue();
  });
  test("should be return false if the file size is under than 1mb", () => {
    const file: FileData = dummyFile(filetestPath["jpeg"]);

    expect(invalidFileSize({ file, size: 1 })).toBeFalse();
  });
  test("should be return true if the file size is more than 20mb", () => {
    const file: FileData = dummyFile(filetestPath["40mb"]);

    expect(invalidFileSize({ file, size: 20 })).toBeTrue();
  });
  test("should be return true if the file size is more than 40mb", () => {
    const file: FileData = dummyFile(filetestPath["80mb"]);

    expect(invalidFileSize({ file, size: 40 })).toBeTrue();
  });
  test("should be return true if the file size is more than 80mb", () => {
    const file: FileData = dummyFile(filetestPath["80mb"]);

    expect(invalidFileSize({ file, size: 80 })).toBeTrue();
  });
});
