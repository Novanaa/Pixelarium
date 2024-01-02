import client from "../../../../libs/configs/prisma";
import TCreateUser from "../interfaces/types/CreateUserTypes";
import generateClientId from "../../../../services/generateClientId";
import makeUserPublicDirectory from "../../../../utils/makeUserPublicDirectory";

// Function to create a user if it doesn't exist.
// The function takes an object as an argument, which includes properties like providerId, name, email, etc.
// These properties are then used to create a new user in the database.
export default async function createUserIfNotExists({
  providerId,
  name,
  email,
  picture,
  bio,
}: TCreateUser): Promise<void> {
  // Generate a unique clientId for the user using the provided providerId
  const clientId: string = generateClientId(providerId);

  // Create a new user in the database with the provided information
  await client.user.create({
    data: {
      provider_id: providerId,
      name,
      email,
      picture,
      bio,
      // Create a subscription for the user with an initial status of "deactive" and plan of "none"
      subscription: {
        create: {
          status: "deactive",
          plan: "none",
        },
      },
      // Create a client key for the user with the generated clientId
      client_keys: {
        create: {
          client_id: clientId,
        },
      },
      gallery: {
        create: {
          pictures: {},
        },
      },
    },
  });

  makeUserPublicDirectory({ name });
}

// Note: This function is called whenever a new user is encountered during authentication.
// It ensures that a user record is created in the database before proceeding with the authentication process.
