import { User } from "../../generated/client";

interface UserWithOptionalChaining extends User {
  password?: string | null;
  email?: string | null;
}
