import { plan, status } from "../../../generated/client";
import { faker } from "@faker-js/faker";
import client from "../../libs/configs/prisma";
import generateClientId from "../../services/generateClientId";

export default async function createTestUser({
  providerId,
  plan,
  status,
}: {
  providerId: number;
  plan: plan;
  status: status;
}): Promise<void> {
  const clientId: string = generateClientId(providerId);

  await client.user.create({
    data: {
      provider_id: providerId,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: null,
      picture: "https://example.com/john-doe.jpg",
      type: "User",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      client_keys: {
        create: {
          client_id: clientId,
          client_secret:
            "a93efc24cf7b6783b87a7487afe2de9035125f66257da682f8b10dc6544a63c2",
        },
      },
      subcription: {
        create: {
          plan,
          status,
        },
      },
    },
  });
}
