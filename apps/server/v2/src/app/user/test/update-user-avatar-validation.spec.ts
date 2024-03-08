import path from "path";
import { test, expect, describe } from "bun:test";
import type { default as FileDate } from "@/interfaces/file";
import updateUserAvatarValidation from "../services/update-user-avatar-validation";
import dummyFile from "@/test/dummy-file";
import error from "@/utils/error";

describe("Update User Avatar Validation", () => {
  test("should be return bad request error when the file is invalid", () => {
    const avatar: FileDate = dummyFile("");
    const extname: string = path.extname(avatar.name);

    expect(updateUserAvatarValidation({ avatar, extname })).toEqual(
      error.badRequest(
        "Invalid file type, please provide a valid picture or avatar!"
      )
    );
  });
});
