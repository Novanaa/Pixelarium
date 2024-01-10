import { plan, status } from "../../../generated/client";
import { faker } from "@faker-js/faker";
import client from "../../libs/configs/prisma";
import generateClientId from "../../services/generateClientId";
import generateTestUserGalleryPictureData, {
  GenerateTestUserGalleryPictureDataOptions,
} from "./generateTestUserGalleryPictureData";
import logger from "../../libs/configs/logger";
import makeUserPublicDirectory from "../../utils/makeUserPublicDirectory";

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
    const [pictures] = await Promise.all([
      generateTestUserGalleryPictureData(5, {
        is_external_picture: options.is_external_picture,
      }),
    ]);
    const username: string = faker.person.fullName();

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
            client_secret:
              "a93efc24cf7b6783b87a7487afe2de9035125f66257da682f8b10dc6544a63c2",
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
            pictures: {
              createMany: {
                data: !options.emptyPicture ? pictures : [],
                skipDuplicates: true,
              },
            },
          },
        },
      },
    });

    makeUserPublicDirectory({ name: username });
  } catch (err) {
    logger.error(err);
  } finally {
    await client.$disconnect();
  }
}
