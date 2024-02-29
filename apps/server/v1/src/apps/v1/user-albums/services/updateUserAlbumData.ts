import { Album } from "../../../../../packages/prisma/generated/client";
import client from "../../../../libs/configs/prisma";
import AddAlbumDataRequestBody from "../../../../validations/interfaces/types/AddAlbumDataRequestBody";
import UserAlbums from "../interfaces/UserAlbums";
import getUserAlbum from "./getUserAlbum";

type UpdateUserAlbumDataParams = {
  albumId: number;
  value: AddAlbumDataRequestBody;
};

/**
 * Updates the data of a user album.
 *
 * @param {UpdateUserAlbumDataParams} params - The parameters for updating the user album data.
 * @param {number} params.albumId - The ID of the album to update.
 * @param {AddAlbumDataRequestBody} params.value - The new data to update the album with.
 * @returns {Promise<UserAlbums | null>} - A promise that resolves to the updated user album, or null if the album does not exist.
 */
export default async function updateUserAlbumData({
  albumId,
  value,
}: UpdateUserAlbumDataParams): Promise<UserAlbums | null> {
  const queryResult: Awaited<Album> = await client.album.update({
    where: { id: albumId },
    data: { ...value },
  });

  const userAlbum: Awaited<UserAlbums | null> = await getUserAlbum(
    queryResult.id
  );

  return userAlbum;
}
