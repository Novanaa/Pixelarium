import { Album } from "../../../../../generated/client";
import client from "../../../../libs/configs/prisma";
import AddAlbumDataRequestBody from "../../../../validations/interfaces/types/AddAlbumDataRequestBody";
import getDefaultUserAlbumThumbnail from "./getDefaultUserAlbumThumbnail";

type CreateNewUserAlbumParams = {
  value: AddAlbumDataRequestBody;
  userId: number;
};

/**
 * Creates a new album for a user.
 *
 * @param {CreateNewUserAlbumParams} params - The parameters for creating a new user album.
 * @param {number} params.userId - The ID of the user.
 * @param {AddAlbumDataRequestBody} params.value - The data for the new album.
 * @returns {Promise<Album>} The created album.
 */
export default async function createNewUserAlbum({
  userId,
  value,
}: CreateNewUserAlbumParams): Promise<Album> {
  const queryResult: Awaited<Album> = await client.album.create({
    data: {
      ...value,
      thumbnail: getDefaultUserAlbumThumbnail(),
      user_id: userId,
    },
  });

  return queryResult;
}
