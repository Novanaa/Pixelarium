import client from "../../../../libs/configs/prisma";
import TCreateUser from "../interfaces/types/CreateUserTypes";

export default async function createUserIfNotExists({
  providerId,
  name,
  email,
  picture,
  bio,
}: TCreateUser): Promise<void> {
  await client.user.create({
    data: {
      provider_id: providerId,
      name,
      email,
      picture,
      type: "User",
      site_admin: false,
      bio,
      subcription: {
        create: {
          status: "deactive",
          plan: "none",
        },
      },
    },
  });
}
