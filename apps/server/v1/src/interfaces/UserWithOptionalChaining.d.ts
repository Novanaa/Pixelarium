import { User } from "../../packages/prisma/generated/client";

interface UserWithOptionalChaining extends User {
  password?: string | null;
  email?: string | null;
}
