import client from "../../../../libs/configs/prisma";
import { EmbedLinks } from "../../../../../generated/client";

/**
 * Retrieves the embed links for a given picture ID.
 *
 * @param pictureId - The ID of the picture.
 * @returns A promise that resolves to the embed links for the picture, or null if no embed links are found.
 * @throws An error if the picture ID is not provided.
 */
export default async function getPictureEmbedLinks(
  pictureId: number
): Promise<EmbedLinks | null> {
  if (!pictureId) throw new Error("Picture ID must be provided");

  const embedLinks: Awaited<EmbedLinks | null> =
    await client.embedLinks.findUnique({
      where: { picture_id: pictureId },
    });

  return embedLinks;
}
