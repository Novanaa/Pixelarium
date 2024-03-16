import { DecodedUser } from "@/interfaces/user";
import { User } from "prisma/generated/client";

/**
 * Converts a User object to a DecodedUser object.
 *
 * @param {User} user - The User object to be converted.
 * @returns {DecodedUser} - The converted DecodedUser object.
 */
export default function userPayload(user: User): DecodedUser {
  return {
    avatar: user.avatar,
    bio: user.bio as string,
    email: user.email,
    id: user.id,
    is_member: user.is_member,
    name: user.name,
    origin_code: user.origin_code,
    type: user.type,
  };
}
