/* eslint-disable @typescript-eslint/no-explicit-any */

import prisma from "@/libs/prisma";
import logger from "@/libs/logger";
import { User } from "prisma/generated/client";
import env from "@/configs/env";
import slugify from "slugify";
import {
  randBoolean,
  randEmail,
  randFullName,
  randPassword,
  randSentence,
  randUrl,
} from "@ngneat/falso";

/**
 * The function generates test user data using Prisma and logs the result.
 */
export default async function generateTestUser(): Promise<void> {
  try {
    const user: Awaited<User | null> = await prisma.user.findUnique({
      where: { origin_code: 1 },
    });

    if (env.nodeEnv == "development" && !user) {
      let i: number = 1;
      while (i < 6) {
        await prisma.user.create({
          data: {
            origin_code: i,
            name: slugify(randFullName(), { lower: true }),
            email: randEmail(),
            avatar: randUrl(),
            type: "Admin",
            bio: randSentence(),
            password: randPassword(),
            is_member: randBoolean(),
          },
        });

        i++;
      }

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
