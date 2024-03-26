import { ZodType, z } from "zod";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserValidation {
  static readonly UPDATEUSER: ZodType = z.object({
    name: z.string().nullable(),
    bio: z.string().nullable(),
  });
}
