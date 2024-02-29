import { UserWithOptionalChaining } from "../../interfaces/UserWithOptionalChaining";

/**
 * Converts a user object to a JSON representation, excluding sensitive information.
 *
 * @param {UserWithOptionalChaining | null} user - The user object to be converted.
 * @returns {object} - The JSON representation of the user object.
 */
export default function jsonifyUserObject(
  user: UserWithOptionalChaining | null
) {
  const userObj = {
    ...user,
    updatedAt: user?.updatedAt.toJSON(),
    createdAt: user?.createdAt.toJSON(),
  };

  delete userObj.email;
  delete userObj.password;

  return userObj;
}
