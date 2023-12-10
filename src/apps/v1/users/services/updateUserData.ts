import client from "../../../../libs/configs/prisma";
import type TUserValidation from "../interfaces/types/UserValidationTypes";

export default async function updateUserData({
  id,
  data: value,
}: {
  id: string;
  data: TUserValidation;
}): Promise<void> {
  await client.user.update({
    where: { id: Number(id) },
    data: {
      ...value,
    },
  });
}
