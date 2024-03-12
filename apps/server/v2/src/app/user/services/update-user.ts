import prisma from "@/libs/prisma";
import UpdateUserPayload from "../interfaces/update-user-payload";
import UserWithOptionalChaining from "@/interfaces/user";

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
}: UpdateUserParams): Promise<UserWithOptionalChaining> {
  try {
    const user: Awaited<UserWithOptionalChaining> = await prisma.user.update({
      where: { name },
      data: payload,
    });

    delete user.email;
    delete user.password;

    return user;
  } finally {
    await prisma.$disconnect();
  }
}
