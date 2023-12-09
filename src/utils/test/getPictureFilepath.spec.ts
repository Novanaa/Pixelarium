import { expect, test, describe } from "bun:test";
import getPictureFilepath from "../getPictureFilepath";

describe("Unit-Testing getPictureFilepath Utils", () => {
  test("should be return picture filepath", () => {
    const picturePath: string = getPictureFilepath({ usage: "galleries" });

    expect(picturePath).toBeDefined();
  });
  test("filepath data type should be string", () => {
    const picturePath: string = getPictureFilepath({ usage: "albums" });

    expect(picturePath).toBeString();
  });
  test("filepath should be return the same as => img/users/profiles/pictures", () => {
    const picturePath: string = getPictureFilepath({ usage: "users" });

    expect(picturePath).toBe("img/users/profiles/pictures");
  });
});
