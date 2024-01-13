import { plan, status } from "../../../generated/client";
import { faker } from "@faker-js/faker";
import client from "../../libs/configs/prisma";
import generateClientId from "../../services/generateClientId";
import generateTestUserGalleryPictureData, {
  GenerateTestUserGalleryPictureDataOptions,
} from "./generateTestUserGalleryPictureData";
import logger from "../../libs/configs/logger";
import makeUserPublicDirectory from "../../utils/makeUserPublicDirectory";
import PictureEmbedLinks from "../../apps/v1/embed-links/interfaces/PictureEmbedLinks";
import generatePictureEmbedLinks from "../../apps/v1/embed-links/services/generatePictureEmbedLinks";

interface CreateTestUserOptions
  extends GenerateTestUserGalleryPictureDataOptions {
  emptyPicture: boolean;
}

/**
 * Creates a test user with the given parameters.
 *
 * @param {Object} options - The options for creating the test user.
 * @param {number} options.providerId - The provider ID of the test user.
 * @param {plan} options.plan - The plan of the test user.
 * @param {status} options.status - The status of the test user.
 * @param {CreateTestUserOptions} options.options - Additional options for creating the test user.
 * @returns {Promise<void>} - A promise that resolves when the test user is created.
 * @throws {Error} - If an error occurs during the creation of the test user.
 */
export default async function createTestUser({
  providerId,
  plan,
  status,
  options,
}: {
  providerId: number;
  plan: plan;
  status: status;
  options: CreateTestUserOptions;
}): Promise<void> {
  try {
    const clientId: string = generateClientId(providerId);
    const [picture] = await Promise.all([
      generateTestUserGalleryPictureData(1, {
        is_external_picture: options.is_external_picture,
      })[0],
    ]);
    const username: string = faker.person.fullName();
    const pictureEmbedLinks: PictureEmbedLinks = generatePictureEmbedLinks({
      url: faker.internet.url(),
      title: faker.lorem.words(),
      directViewLink: faker.internet.url(),
      options: {
        imageHeight: 1000,
        imageWidth: 1000,
      },
    });
    const client_secret: string =
      "a93efc24cf7b6783b87a7487afe2de9035125f66257da682f8b10dc6544a63c2";

    if (options.emptyPicture) {
      await client.user.create({
        data: {
          provider_id: providerId,
          name: username,
          email: faker.internet.email(),
          password: null,
          picture: faker.internet.url(),
          bio: faker.lorem.sentence(),
          client_keys: {
            create: {
              client_id: clientId,
              client_secret,
            },
          },
          favorite_picture: {
            create: {
              pictures: {},
              favorited_pictures: 0,
            },
          },
          subscription: {
            create: {
              plan,
              status,
            },
          },
          gallery: {
            create: {
              pictures: {},
            },
          },
        },
      });
    }

    if (!options.emptyPicture) {
      await client.user.create({
        data: {
          provider_id: providerId,
          name: username,
          email: faker.internet.email(),
          password: null,
          picture: faker.internet.url(),
          bio: faker.lorem.sentence(),
          client_keys: {
            create: {
              client_id: clientId,
              client_secret,
            },
          },
          subscription: {
            create: {
              plan,
              status,
            },
          },
          favorite_picture: {
            create: {
              pictures: {},
              favorited_pictures: 0,
            },
          },
          gallery: {
            create: {
              pictures: {
                create: {
                  ...picture,
                  embed_link: {
                    create: {
                      ...pictureEmbedLinks,
                    },
                  },
                },
              },
            },
          },
        },
      });
    }

    makeUserPublicDirectory({ name: username });
  } catch (err) {
    logger.error(err);
  } finally {
    await client.$disconnect();
  }
}
