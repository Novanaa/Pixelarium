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
import generatePictureEmbedLinksData from "../../apps/v1/embed-links/services/generatePictureEmbedLinksData";
import generateUserSubscriptionPaymentID from "../../utils/generateUserSubscriptionPaymentID";
import { getFutureDateTimeInDays } from "../../utils/getFutureDateTime";
import generatePaymentOrderId from "../../apps/v1/subscriptions/services/generatePaymentOrderId";
import convertUSDToIDR from "../../apps/v1/subscriptions/services/convertUSDToIDR";
import dummyPaymentOrderId from "../../const/readonly/dummyPaymentOrderId";

interface CreateTestUserOptions
  extends GenerateTestUserGalleryPictureDataOptions {
  isMember?: boolean;
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
    const pictureEmbedLinks: PictureEmbedLinks = generatePictureEmbedLinksData({
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

    const createUserClientKeysData = {
      create: {
        client_id: clientId,
        client_secret,
      },
    };

    const createUserSubscriptionPaymentId: string | null = options?.isMember
      ? generateUserSubscriptionPaymentID({ name: username, plan })
      : null;

    const intervalCount: number = 30;
    const startDate: Date = new Date();
    const endDate: Date = getFutureDateTimeInDays({
      futureDateTimeInDays: intervalCount,
    });
    const nextPaymentDate: Date = getFutureDateTimeInDays({
      futureDateTimeInDays: intervalCount + 1,
    });

    const createUserSubsData = {
      create: {
        plan,
        status,
        payment_id: createUserSubscriptionPaymentId,
        start_date: options.isMember ? startDate : null,
        end_date: options.isMember ? endDate : null,
        next_payments_date: options.isMember ? nextPaymentDate : null,
      },
    };

    const intervalCountPaymentHistory: number = faker.number.int({
      min: 1,
      max: 3,
    });
    const amountInUSD: number = 2.99 * intervalCountPaymentHistory;
    const amountInIDR: number = await convertUSDToIDR(amountInUSD);

    const createUserAlbum = {
      create: {
        title: faker.lorem.words(),
        description: faker.lorem.sentences(),
        is_private: faker.datatype.boolean(),
        thumbnail: faker.internet.url(),
      },
    };

    if (options.emptyPicture) {
      await client.user.create({
        data: {
          provider_id: providerId,
          name: username,
          email: faker.internet.email(),
          password: null,
          picture: faker.internet.url(),
          bio: faker.lorem.sentence(),
          client_keys: createUserClientKeysData,
          is_member: options?.isMember || false,
          favorite_picture: {
            create: {
              pictures: {},
              favorited_pictures: 0,
            },
          },
          subscription: createUserSubsData,
          gallery: {
            create: {
              pictures: {},
            },
          },
          album: createUserAlbum,
          paymentHistory: {
            create: {
              interval_count: intervalCountPaymentHistory,
              amount: {
                USD: amountInUSD,
                IDR: amountInIDR,
              },
              order_date: new Date(),
              plan: "Gold",
              order_id: dummyPaymentOrderId,
              status: "pending",
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
          client_keys: createUserClientKeysData,
          subscription: createUserSubsData,
          is_member: options?.isMember || false,
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
          album: createUserAlbum,
          paymentHistory: {
            create: {
              interval_count: intervalCountPaymentHistory,
              amount: {
                USD: amountInUSD,
                IDR: amountInIDR,
              },
              order_date: new Date(),
              plan: "Gold",
              order_id: generatePaymentOrderId(),
              status: "pending",
            },
          },
        },
      });
    }

    makeUserPublicDirectory({ name: username });
  } catch (err) {
    if (err) throw err;
    logger.error(err);
  } finally {
    await client.$disconnect();
  }
}
