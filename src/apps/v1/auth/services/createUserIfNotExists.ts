import client from "../../../../libs/configs/prisma";
import TCreateUser from "../interfaces/types/CreateUserTypes";

export default async function createUserIfNotExists({
  name,
  email,
  picture,
  type,
  site_admin,
  bio,
}: TCreateUser): Promise<void> {
  await client.user.create({
    data: {
      name,
      email,
      picture,
      type,
      site_admin,
      bio,
    },
  });
}
