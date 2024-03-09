/* eslint-disable no-console */

import path from "path";
import filetestPath from "@/constant/filetest-path";
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
  test("should be return bad request error when the file is more than 1mb", () => {
    const avatar: FileDate = dummyFile(filetestPath["20mb"]);
    const extname: string = path.extname(avatar.name);

    console.log(avatar);
    expect(updateUserAvatarValidation({ avatar, extname })).toEqual(
      error.badRequest(
        "The picture file size was too big, please provide a smaller picture size!"
      )
    );
  });
  test("should be return bad request error when the file extension is not supported", () => {
    const avatar: FileDate = dummyFile(filetestPath["sgi"]);
    const extname: string = path.extname(avatar.name);

    console.log(avatar);
    expect(updateUserAvatarValidation({ avatar, extname })).toEqual(
      error.unprocessableContent(
        "The picture extension wasn't supported by pixelarium, please try again with supported picture extension like .png or .jpg"
      )
    );
  });
  test("should be return undefined when the picture file extension is supported", () => {
    const avatar: FileDate = dummyFile(filetestPath["avif"]);
    const extname: string = path.extname(avatar.name);

    console.log(avatar);
    expect(updateUserAvatarValidation({ avatar, extname })).toBeUndefined();
  });
  test("should be return undefined when the picture file is under than 1mb", () => {
    const avatar: FileDate = dummyFile(filetestPath["jpeg"]);
    const extname: string = path.extname(avatar.name);

    console.log(avatar);
    expect(updateUserAvatarValidation({ avatar, extname })).toBeUndefined();
  });
  test("should be return undefined when the picture file is not a broken file", () => {
    const avatar: FileDate = dummyFile(filetestPath["jpeg"]);
    const extname: string = path.extname(avatar.name);

    console.log(avatar);
    expect(updateUserAvatarValidation({ avatar, extname })).toBeUndefined();
  });
});
