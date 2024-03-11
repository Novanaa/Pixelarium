import logger from "@/libs/logger";
import prisma from "@/libs/prisma";
import UpdateUserPayload from "../interfaces/update-user-payload";
import { User } from "prisma/generated/client";

interface UpdateUserParams {
  payload: Payload;
  name: string;
}

interface Payload extends Omit<UpdateUserPayload, "avatar"> {
  avatar: string;
}

/**
 * This TypeScript function updates a user's data using Prisma and disconnects from the database after
 * the operation.
 * @param {UpdateUserParams}  - The `updateUser` function is an asynchronous function that updates a
 * user in a database using Prisma. It takes an object as a parameter with the following properties:
 */
export default async function updateUserData({
  name,
  payload,
}: UpdateUserParams): Promise<User | null> {
  try {
    return await prisma.user.update({
      where: { name },
      data: payload,
    });
  } catch (err) {
    logger.error(err);

    return null;
  } finally {
    await prisma.$disconnect();
  }
}
