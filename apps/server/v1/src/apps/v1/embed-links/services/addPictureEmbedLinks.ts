import {
  EmbedLinks,
  Picture,
} from "../../../../../packages/prisma/generated/client";
import client from "../../../../libs/configs/prisma";
import PictureEmbedLinks from "../interfaces/PictureEmbedLinks";

type AddPictureEmbedLinksParams = {
  userPicture: Picture;
  pictureEmbedLinks: PictureEmbedLinks;
};

/**
 * Adds picture embed links to a user picture.
 *
 * @param {AddPictureEmbedLinksParams} params - The parameters for adding picture embed links.
 * @param {Picture} params.userPicture - The user picture to add embed links to.
 * @param {PictureEmbedLinks} params.pictureEmbedLinks - The embed links to add to the user picture.
 * @returns {Promise<EmbedLinks>} - A promise that resolves to the created embed links.
 */
export default async function addPictureEmbedLinks({
  userPicture,
  pictureEmbedLinks,
}: AddPictureEmbedLinksParams): Promise<EmbedLinks> {
  const embedLinks: Awaited<EmbedLinks> = await client.embedLinks.create({
    data: {
      picture_id: userPicture.id,
      ...pictureEmbedLinks,
    },
  });

  return embedLinks;
}
