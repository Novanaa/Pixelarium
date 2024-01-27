import { UserWithOptionalChaining } from "../interfaces/UserWithOptionalChaining";
import logger from "../libs/configs/logger";
import validator from "validator";
import { isUserExistByNameOrEmail } from "../utils/isUser";
import { Picture } from "../../generated/client";
import getUserPictureByUniquekey from "../apps/v1/pictures/services/getUserPictureByUniquekey";
import addPictureEmbedLinks from "../apps/v1/embed-links/services/addPictureEmbedLinks";
import PictureEmbedLinks from "../apps/v1/embed-links/interfaces/PictureEmbedLinks";
import generatePictureEmbedLinksData from "../apps/v1/embed-links/services/generatePictureEmbedLinksData";
import generateDirectViewLinkPicture from "../apps/v1/embed-links/services/generateDirectViewLinkPicture";

type GeneratePictureEmbedLinksParams = {
  name: string;
  uniquekey: string;
};

/**
 * Generates picture embed links for a given user and picture.
 *
 * @param name - The name of the user.
 * @param uniquekey - The unique key of the picture.
 * @returns A promise that resolves to void.
 * @throws {Error} If the picture uniquekey is not valid, the user doesn't exist, the picture doesn't exist, or the picture is private.
 */
export default async function generatePictureEmbedLinks({
  name,
  uniquekey,
}: GeneratePictureEmbedLinksParams): Promise<void> {
  try {
    if (!validator.isUUID(uniquekey))
      throw new Error("The picture uniquekey must be valid");

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByNameOrEmail({ field: "name", value: name });

    if (!user) throw new Error("The user doesn't exist");

    const userPicture: Awaited<Picture | null> =
      await getUserPictureByUniquekey(uniquekey);

    if (!userPicture) throw new Error("The picture doesn't exist");

    if (userPicture.is_private)
      throw new Error("The picture must be a public picture");

    const directViewLink: string = generateDirectViewLinkPicture(uniquekey);

    const pictureEmbedLinks: PictureEmbedLinks = generatePictureEmbedLinksData({
      title: userPicture.title,
      url: userPicture.url,
      directViewLink,
      options: { imageHeight: 100, imageWidth: 100 },
    });

    await addPictureEmbedLinks({
      userPicture,
      pictureEmbedLinks,
    });
  } catch (err) {
    logger.error(err);
  }
}
