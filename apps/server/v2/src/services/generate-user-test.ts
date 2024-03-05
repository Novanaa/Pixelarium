/* eslint-disable @typescript-eslint/no-explicit-any */

import prisma from "@/libs/prisma";
import users from "../../resources/user.json";
import subscription from "../../resources/subscription.json";
import logger from "@/libs/logger";
import { User } from "prisma/generated/client";
import env from "@/configs/env";
import getUser from "@/app/user/services/get-user";
import galleries from "../../resources/gallery.json";
import clientKeys from "../../resources/client-key.json";
import paymentsHistories from "../../resources/payment-history.json";
import favorites from "../../resources/favorites.json";
import albums from "../../resources/album.json";
import pictures from "../../resources/picture.json";
import embedLinks from "../../resources/embed-link.json";

/**
 * The function generates test user data using Prisma and logs the result.
 */
export default async function generateTestUser(): Promise<void> {
  try {
    const user: Awaited<User | null> = await getUser(users[0].name);

    if (env.nodeEnv == "development" && !user) {
      await Promise.all([
        prisma.user.createMany({
          data: users as Array<any>,
        }),
        prisma.subscription.createMany({
          data: subscription as Array<any>,
        }),
        prisma.gallery.createMany({
          data: galleries as Array<any>,
        }),
        prisma.clientKey.createMany({
          data: clientKeys as Array<any>,
        }),
        prisma.paymentsHistory.createMany({
          data: paymentsHistories as Array<any>,
        }),
        prisma.favorite.createMany({
          data: favorites as Array<any>,
        }),
        prisma.album.createMany({
          data: albums as Array<any>,
        }),
        prisma.picture.createMany({
          data: pictures as Array<any>,
        }),
        prisma.embedLinks.createMany({
          data: embedLinks as Array<any>,
        }),
      ]);

      await prisma.$disconnect();
      return logger.info("Assessment data has been successfully generated.");
    }

    logger.info("Assessment data is already generated!");
    await prisma.$disconnect();
  } catch (err) {
    logger.error(err);
    await prisma.$disconnect();

    process.exit(1);
  }
}
