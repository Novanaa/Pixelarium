import { Picture } from "../../../../../generated/client";
import client from "../../../../libs/configs/prisma";
import TUpdateUserGalleryPictureField from "../interfaces/types/UpdateUserGalleryPictureField";

type UpdateUserPictureGalleryParams = {
  uniquekey: string;
  data: TUpdateUserGalleryPictureField;
};

/**
 * Updates a user's picture gallery.
 *
 * @param {UpdateUserPictureGalleryParams} params - The parameters for updating the user's picture gallery.
 * @param {string} params.uniquekey - The unique key of the user.
 * @param {TUpdateUserGalleryPictureField} params.data - The data to update the user's picture gallery with.
 * @returns {Promise<Picture>} - A promise that resolves to the updated picture gallery.
 */
export default async function updateUserPictureGallery({
  uniquekey,
  data,
}: UpdateUserPictureGalleryParams): Promise<Picture> {
  const updateUserPictureGallery: Awaited<Picture> =
    await client.picture.update({
      where: { uniquekey },
      data,
    });

  return updateUserPictureGallery;
}
