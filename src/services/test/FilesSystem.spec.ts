import { expect, test, describe } from "bun:test";
import FilesSystem from "../FilesSystem";
import fs from "fs";

const filesSystem = new FilesSystem();
fs.appendFileSync("test.text", "This is test file");
describe("Unit-Testing FilesSystem Services", () => {
  test("should be return true", () => {
    const isExist: boolean | null = filesSystem.isExist("./test.text");

    expect(isExist).toBe(true);
  });
  test("should be return false if the directory is not defined", () => {
    const isExist: boolean | null = filesSystem.isExist("./publics");

    expect(isExist).toBe(false);
  });
  test("should be return true", () => {
    const deleteFile: boolean | null = filesSystem.deleteFile("./test.text");

    expect(deleteFile).toBe(true);
  });
  test("should be return false if the file is not found", () => {
    const deleteFile: boolean | null = filesSystem.deleteFile("./test.txt");

    expect(deleteFile).toBe(false);
  });
});
