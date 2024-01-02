import { expect, test, describe } from "bun:test";
import checkIfPictureIsInternalPicture from "../checkIfPictureIsInternalPicture";

describe("Unit-Testing checkIfPictureIsInternalPicture Utils", () => {
  test("should be return true", () => {
    const path: string =
      "http://127.0.0.1:54657/img/users/profiles/pictures/test.png";
    const isInternalPicture: boolean | null = checkIfPictureIsInternalPicture({
      picturePath: path,
      usage: "users",
    });

    expect(isInternalPicture).toBeTrue();
  });
  test("should be return true", () => {
    const path: string = "http://127.0.0.1:54657/img/albums/pictures/test.png";
    const isInternalPicture: boolean | null = checkIfPictureIsInternalPicture({
      picturePath: path,
      usage: "albums",
    });

    expect(isInternalPicture).toBeTrue();
  });
  test("should be return true", () => {
    const path: string =
      "http://127.0.0.1:54657/img/galleries/test/pictures/test.png";
    const isInternalPicture: boolean | null = checkIfPictureIsInternalPicture({
      picturePath: path,
      usage: "galleries",
      name: "test",
    });

    console.log(isInternalPicture);

    expect(isInternalPicture).toBeTrue();
  });
  test("should be return false if the picture path is external picture", () => {
    const path: string =
      "https://avatars.githubusercontent.com/u/130564362?v=4";
    const isInternalPicture: boolean | null = checkIfPictureIsInternalPicture({
      picturePath: path,
      usage: "users",
    });

    expect(isInternalPicture).toBeFalse();
  });
  test("should be return false if the usage is not valid", () => {
    const path: string =
      "http://127.0.0.1:54657/img/galleries/pictures/test.png";
    const isInternalPicture: boolean | null = checkIfPictureIsInternalPicture({
      picturePath: path,
      // @ts-expect-error Types Error
      usage: "hehe",
    });

    expect(isInternalPicture).toBeFalse();
  });
});
