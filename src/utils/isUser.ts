import { User } from "../../generated/client";
import client from "../libs/configs/prisma";
import type {
  TIsUserFieldWithoutEmailAndName,
  TIsUserFieldWithoutIdAndProviderId,
} from "../interfaces/types/IsUserFieldTypes";
import logger from "../libs/configs/logger";

// The isUserExistByIdOrProviderId function checks if a user exists in the database by their ID or Provider ID.
// It takes an object with the following properties: field, value.
// The field represents the field in the database that the value will be compared to.
// The value represents the value that will be compared to the field value in the database.
// This function returns a promise that resolves to either a User object or null.
/**
 * Checks if a user exists by a specific field and value.
 *
 * @param {{ field: TIsUserFieldWithoutEmailAndName, value: unknown }} params - An object containing the field and value to check.
 * @returns {Promise<User | null>} A Promise that resolves to a User object if the user exists, or null if the user does not exist or an error occurs.
 */
export async function isUserExistByIdOrProviderId({
  field,
  value,
}: {
  field: TIsUserFieldWithoutEmailAndName;
  value: unknown;
}): Promise<User | null> {
  try {
    // If the field is not provided, throw an error.
    if (!field) throw new Error("The user field must be filled!");

    // Use the Prisma client to find a unique user by their field and value.
    // The value is casted to a number. If the value cannot be casted to a number, it defaults to 0.
    const isUser: Awaited<User | null> = await client.user.findUnique({
      // @ts-expect-error Just ignore the types errors
      where: { [field]: Number(value) | 0 },
    });

    // If a user is found, return the user object. Otherwise, return null.
    return isUser;
  } catch (err) {
    // If an error occurs, log the error and return null.
    logger.error(err);
    return null;
  }
}

/**
 * This function checks if a user exists in the database by name or email.
 * It takes an object as a parameter, which includes a 'field' and a 'value'.
 * The 'field' is either 'name' or 'email', and the 'value' is the name or email of the user to check.
 *
 * If the user exists, the function returns the User object.
 * If the user does not exist, the function returns null.
 *
 * @param {{ field: TIsUserFieldWithoutIdAndProviderId; value: string; }} params - An object containing the 'field' and 'value' parameters.
 * @returns {Promise<User | null>} - A Promise that resolves to either a User object or null, depending on whether the user exists or not.
 */
export async function isUserExistByNameOrEmail({
  field,
  value,
}: {
  field: TIsUserFieldWithoutIdAndProviderId;
  value: string;
}): Promise<User | null> {
  try {
    // If the field is not provided, throw an error
    if (!field) throw new Error("The user field must be filled!");

    // Query the database to find a unique user by the given field and value
    const isUser: Awaited<User | null> = await client.user.findUnique({
      // Ignore the type errors since we're manually casting the value to a number
      // @ts-expect-error Just ignore the types errors
      where: { [field]: value },
    });

    // Return the user if found, otherwise return null
    return isUser;
  } catch (err) {
    // Log the error
    logger.error(err);
    // Return null in case of an error
    return null;
  }
}
