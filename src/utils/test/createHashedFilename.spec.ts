import { expect, test, describe } from "bun:test";
import createHashedFilename from "../createHashedFilename";
import { UploadedFile } from "express-fileupload";

describe("Unit-Testing Create Hashed Filename Utils", () => {
  test("should be return string data types", () => {
    const file: UploadedFile = {
      md5: "uiagf3f8h9w8y9r8230847ur",
      data: new Buffer("hehehehhe", "utf-8"),
      name: "name.png",
      encoding: "utf-8",
      // @ts-expect-error types error
      mv: (path: string, callback: (err: string) => void): void => {
        console.log(path);
        console.log(callback);
      },
    };

    const hashedFilename: string = createHashedFilename({ file });

    expect(hashedFilename).toBeString();
  });
  test("returned value should be defined", () => {
    const file: UploadedFile = {
      md5: "uiagf3f8h9w8y9r8230847ur",
      data: new Buffer("hehehehhe", "utf-8"),
      name: "name.png",
      encoding: "utf-8",
      // @ts-expect-error types error
      mv: (path: string, callback: (err: string) => void): void => {
        console.log(path);
        console.log(callback);
      },
    };

    const hashedFilename: string = createHashedFilename({ file });

    expect(hashedFilename).toBeDefined();
  });
  test("returned value should be the same as => uiagf3f8h9w8y9r8230847ur.png", () => {
    const file: UploadedFile = {
      md5: "uiagf3f8h9w8y9r8230847ur",
      data: new Buffer("hehehehhe", "utf-8"),
      name: "name.png",
      encoding: "utf-8",
      // @ts-expect-error types error
      mv: (path: string, callback: (err: string) => void): void => {
        console.log(path);
        console.log(callback);
      },
    };

    const hashedFilename: string = createHashedFilename({ file });

    expect(hashedFilename).toBe("uiagf3f8h9w8y9r8230847ur.png");
  });
});
