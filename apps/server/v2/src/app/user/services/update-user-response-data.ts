import prisma from "@/libs/prisma";
import updateUserData from "./update-user";
import { UpdateUserResponseData } from "../controllers/update";
import UpdateUserPayload from "../interfaces/update-user-payload";
import { User } from "prisma/generated/client";
import UserWithOptionalChaining from "@/interfaces/user";

interface UpdateUserResponseDataParams {
  payload: UpdateUserPayload;
  user: User;
  avatarUrlpath: string;
}

/**
 * The function `updateUserResponseData` updates user data with a new avatar URL and returns a response
 * object with the updated user and status.
 * @param {UpdateUserResponseDataParams}  - The `UpdateUserResponseDataParams` interface defines the
 * parameters expected by the `updateUserResponseData` function:
 * @returns The function `updateUserResponseData` is returning an object with the following properties:
 * - `updated_user`: the updated user object
 * - `status`: a string value of "OK"
 */
export default async function updateUserResponseData({
  payload,
  user,
  avatarUrlpath,
}: UpdateUserResponseDataParams): Promise<UpdateUserResponseData> {
  const updatedUser: Awaited<UserWithOptionalChaining | null> =
    await updateUserData({
      name: user.name,
      payload: { ...payload, avatar: avatarUrlpath },
    });

  await prisma.$disconnect();

  const responseData: UpdateUserResponseData = {
    updated_user: updatedUser,
    status: "OK",
  } satisfies UpdateUserResponseData;

  return responseData;
}
