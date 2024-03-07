import error from "@/utils/error";
import type { default as FileData } from "@/interfaces/file";
import invalidFile from "@/utils/invalid-file";
import invalidFileSize from "@/utils/invalid-file-size";
import invalidPictureExtension from "@/utils/invalid-picture-ext";

interface UpdateUserAvatarValidation {
  avatar: FileData;
  extname: string;
}

/**
 * The function `updateUserAvatarValidation` validates the user avatar file type, size, and extension.
 * @param {UpdateUserAvatarValidation}  - The `updateUserAvatarValidation` function takes in an object
 * with two properties: `avatar` and `extname`.
 * @returns The function `updateUserAvatarValidation` is returning error messages based on the
 * validation checks for the avatar file. If any of the validation checks fail, it returns an error
 * message indicating the specific issue with the file provided.
 */
export default function updateUserAvatarValidation({
  avatar,
  extname,
}: UpdateUserAvatarValidation) {
  if (invalidFile(avatar.mimetype))
    return error.badRequest(
      "Invalid file type, please provide a valid picture or avatar!"
    );

  if (invalidFileSize({ file: avatar, size: 1 }))
    return error.badRequest(
      "The picture file size was too big, please provide a smaller picture size!"
    );

  if (invalidPictureExtension(extname))
    return error.unprocessableContent(
      "The picture extension wasn't supported by pixelarium, please try again with supported picture extension like .png or .jpg"
    );
}
