/* eslint-disable semi */

import { User } from "prisma/generated/client";

export default interface UserWithOptionalChaining extends User {
  email?: string | null;
  password?: string | null;
}
