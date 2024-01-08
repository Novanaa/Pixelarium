import { GetBatchResult } from "@prisma/client/runtime/library";
import client from "../../../../libs/configs/prisma";

/**
 * Removes all pictures with the given unique keys.
 *
 * @param uniquekey - An array of unique keys of the pictures to be removed.
 * @returns A promise that resolves to the number of pictures deleted.
 */
export default async function removesAllPictures(
  uniquekey: Array<string>
): Promise<GetBatchResult> {
  const deletePictures: Awaited<GetBatchResult> =
    await client.picture.deleteMany({
      where: {
        uniquekey: {
          in: uniquekey,
        },
      },
    });

  return deletePictures;
}
