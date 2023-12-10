import client from "../../../../libs/configs/prisma";
import type TUserValidation from "../interfaces/types/UserValidationTypes";

export default async function updateUserData({
  id,
  data: value,
  picture,
}: {
  id: string;
  data: TUserValidation;
  picture?: string;
}): Promise<void> {
  await client.user.update({
    where: { id: Number(id) },
    data: {
      ...value,
      picture: picture || value.picture,
    },
  });
}
