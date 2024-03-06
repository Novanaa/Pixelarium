/* eslint-disable no-console */
import { expect, test, describe } from "bun:test";
import {
  getAvatarDirectoryPath,
  getGalleryDirectoryPath,
} from "@/utils/public-directory-path";

describe("Get Public Directory Path", () => {
  test("should be return avatar directory path", () => {
    const filename: string = "test.png";
    const dirpath: string = getAvatarDirectoryPath(filename);

    console.log(dirpath);
    expect(dirpath).toBe("./public/avatar/" + filename);
  });
  test("avatar public directory path should be included filename", () => {
    const filename: string = "test.png";
    const dirpath: string = getAvatarDirectoryPath(filename);

    console.log(dirpath);
    expect(dirpath.includes(filename)).toBeTrue();
  });
  test("should be return gallery directory path", () => {
    const filename: string = "test.png";
    const name: string = "John Doe";
    const dirpath: string = getGalleryDirectoryPath({ filename, name });

    console.log(dirpath);
    expect(dirpath).toBe(`./public/galleries/${name}/${filename}`);
  });
  test("galleries public directory path should be included filename", () => {
    const filename: string = "test.png";
    const name: string = "John Doe";
    const dirpath: string = getGalleryDirectoryPath({ filename, name });

    console.log(dirpath);
    expect(dirpath.includes(filename)).toBeTrue();
  });
  test("galleries public directory path should be included username", () => {
    const filename: string = "test.png";
    const name: string = "John Doe";
    const dirpath: string = getGalleryDirectoryPath({ filename, name });

    console.log(dirpath);
    expect(dirpath.includes(name)).toBeTrue();
  });
});
