/* eslint-disable semi */

import { $Enums, User } from "prisma/generated/client";

export default interface UserWithOptionalChaining extends User {
  email?: string | null;
  password?: string | null;
}

export interface DecodedUser {
  id: string;
  name: string;
  email: string | null;
  origin_code: number;
  avatar: string;
  type: $Enums.UserType;
  bio: string;
  is_member: boolean;
}
