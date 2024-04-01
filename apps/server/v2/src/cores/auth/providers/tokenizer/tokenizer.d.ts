import { User } from "@prisma/client";

export interface UserPayload extends User {
  iat: number;
  exp: number;
}
