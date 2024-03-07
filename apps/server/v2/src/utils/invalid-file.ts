/**
 * This TypeScript function checks if a given MIME type is not related to images.
 * @param {string} mime - The `mime` parameter in the `invalidFile` function is a string that
 * represents the MIME type of a file. The function checks if the MIME type does not include the word
 * "image" and returns a boolean value accordingly.
 * @returns A boolean value is being returned.
 */
export default function invalidFile(mime: string): boolean {
  return !mime.includes("image");
}
