import client from "../../../../libs/configs/prisma";
import { UserGallery } from "../../galleries/services/getUserGallery";
import UserPictureManagementRequestBodyValidationTypes from "../../../../validations/interfaces/types/UserPictureManagementRequestBodyValidationTypes";

type InsertUserPictureGalleryParams = {
  userGallery: UserGallery;
  extension: string;
  filename: string;
  value: UserPictureManagementRequestBodyValidationTypes;
  url: string;
  expires_in: number | null;
};

/**
 * Inserts a new picture into the user's picture gallery in the database.
 *
 * @param userGallery - An object representing the user gallery.
 * @param extension - A string representing the file extension of the picture.
 * @param filename - A string representing the filename of the picture.
 * @param value - An object containing the picture details and privacy settings.
 * @param url - A string representing the URL of the picture.
 * @param expires_in - A number representing the expiration time of the picture in seconds.
 * @returns A Promise that resolves to void.
 */
export default async function insertUserPictureGallery({
  userGallery,
  extension,
  filename,
  value,
  url,
  expires_in,
}: InsertUserPictureGalleryParams): Promise<void> {
  await client.picture.create({
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
    },
  });
}
