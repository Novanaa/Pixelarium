import client from "../../../../libs/configs/prisma";
import { UserGallery } from "../../galleries/services/getUserGallery";
import UserPictureManagementRequestBodyValidationTypes from "../../../../validations/interfaces/types/UserPictureManagementRequestBodyValidationTypes";
import { Picture } from "../../../../../generated/client";

type InsertUserPictureGalleryParams = {
  userGallery: UserGallery;
  extension: string;
  filename: string;
  value: UserPictureManagementRequestBodyValidationTypes;
  url: string;
  expires_in: number | null;
  isExternalPicture: boolean;
};

/**
 * Inserts a new picture into a user's gallery.
 *
 * @param userGallery - The user's gallery object where the picture will be inserted.
 * @param extension - The file extension of the picture.
 * @param filename - The name of the picture file.
 * @param value - An object containing the picture details such as description, title, and privacy settings.
 * @param url - The URL of the picture.
 * @param expires_in - The expiration time of the picture in seconds.
 * @param isExternalPicture
 * @returns The newly inserted picture object in the user's gallery.
 */
export default async function insertUserPictureGallery({
  userGallery,
  extension,
  filename,
  value,
  url,
  expires_in,
  isExternalPicture,
}: InsertUserPictureGalleryParams): Promise<Picture> {
  const insertedPicture: Awaited<Picture> = await client.picture.create({
    data: {
      gallery_id: userGallery.id,
      extension,
      filename,
      description: value.picture_details.description,
      title: value.picture_details.title,
      url,
      expires_in,
      is_favorited: false,
      is_private: value.is_private,
      is_external_picture: isExternalPicture,
    },
  });

  return insertedPicture;
}
