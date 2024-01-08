import client from "../../../../libs/configs/prisma";

/**
 * Removes all pictures with the given unique keys.
 *
 * @param uniquekey - An array of unique keys of the pictures to be removed.
 * @returns A Promise that resolves to void.
 */
export default async function removesAllPictures(
  uniquekey: Array<string>
): Promise<void> {
  await client.picture.deleteMany({
    where: {
      uniquekey: {
        in: uniquekey,
      },
    },
  });
}
