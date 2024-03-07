import allowedPictureExt from "@/constant/allowed-picture-ext";

/**
 * The function checks if a given file extension is not included in a list of allowed picture
 * extensions.
 * @param {string} ext - The `ext` parameter in the `invalidPictureExtension` function represents the
 * file extension of a picture file. The function checks if the provided file extension is not included
 * in the `allowedPictureExt` array.
 * @returns A boolean value indicating whether the provided picture extension is not included in the
 * list of allowed picture extensions.
 */
export default function invalidPictureExtension(ext: string): boolean {
  return !allowedPictureExt.includes(ext.toLowerCase());
}
