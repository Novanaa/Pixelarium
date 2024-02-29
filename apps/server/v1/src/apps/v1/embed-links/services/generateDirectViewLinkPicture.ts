import { CLIENT_FRONTEND_URL } from "../../../../const/env";

/**
 * Generates a direct view link for a picture.
 *
 * @param uniquekey - The unique key of the picture.
 * @returns The direct view link for the picture.
 * @throws {Error} If the unique key is not provided.
 */
export default function generateDirectViewLinkPicture(uniquekey: string) {
  if (!uniquekey) throw new Error("Picture uniquekey must be provided");

  const directViewLink: string = `${CLIENT_FRONTEND_URL}/picture/${uniquekey}`;

  return directViewLink;
}
