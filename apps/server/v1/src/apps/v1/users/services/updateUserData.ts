import client from "../../../../libs/configs/prisma";
import type TUserValidation from "../interfaces/types/UserValidationTypes";

export default async function updateUserData({
  name,
  data: value,
  picture,
}: {
  name: string;
  data: TUserValidation;
  picture?: string;
}): Promise<void> {
  await client.user.update({
    where: { name },
    data: {
      ...value,
      picture: picture || value.picture,
    },
  });
}
