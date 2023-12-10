import { expect, test, describe } from "bun:test";
import getPublicDirectoryPicturepath from "../getPublicDirectoryPicturepath";

describe("Unit-Testing Get Public Directory Picture Path Utils", () => {
  test("should be return string data type", () => {
    const picturePath: string = getPublicDirectoryPicturepath({
      usage: "users",
      filename: "heheh.png",
    });

    expect(picturePath).toBeString();
  });
  test("returned value should be defined", () => {
    const picturePath: string = getPublicDirectoryPicturepath({
      usage: "users",
      filename: "heheh.png",
    });

    expect(picturePath).toBeDefined();
  });
  test("returned value should be defined", () => {
    const picturePath: string = getPublicDirectoryPicturepath({
      usage: "users",
      filename: "heheh.png",
    });

    expect(picturePath).toBeDefined();
  });
  test("value should be return as the same as => ./public/img/users/profiles/pictures/heheh.png", () => {
    const picturePath: string = getPublicDirectoryPicturepath({
      usage: "users",
      filename: "heheh.png",
    });

    expect(picturePath).toBeDefined();
    expect(picturePath).toBe("./public/img/users/profiles/pictures/heheh.png");
  });
});
