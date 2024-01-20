import { faker } from "@faker-js/faker";

export type GenerateTestUserGalleryPictureDataOptions = {
  is_external_picture: boolean;
};

/**
 * Generates test data for a user gallery picture.
 * @returns An object representing a user gallery picture.
 * @example
 * const pictureData = generateTestUserGalleryPictureData();
 * console.log(pictureData);
 *  Output:
 *  {
 *   title: "Lorem",
 *   description: "Lorem ipsum dolor sit amet.",
 *   expires_in: 1631234567890,
 *   extension: ".png",
 *   filename: "picture123.png",
 *   is_favorited: true,
 *   url: "https://example.com/picture123.png",
 *   is_private: false
 *  }
 */
export default function generateTestUserGalleryPictureData(
  numberOfData: number,
  { is_external_picture }: GenerateTestUserGalleryPictureDataOptions
) {
  const pictures = [];

  for (let i = 0; i < numberOfData; i++) {
    const picture = {
      title: faker.lorem.words(),
      description: faker.lorem.sentences(),
      expires_in: 30,
      extension: ".png",
      filename: faker.system.fileName() + ".png",
      url: faker.internet.url(),
      is_private: faker.datatype.boolean(),
      is_external_picture,
    };

    pictures.push(picture);
  }

  return pictures;
}
