import * as joi from "joi";
import { Injectable } from "@nestjs/common";
import { UpdateUserRequestDto } from "./providers/update-user/update-user.dto";

@Injectable()
export class UserValidation {
  static readonly UPDATEUSER: joi.ObjectSchema<UpdateUserRequestDto> =
    joi.object({
      name: joi.string().allow(null),
      bio: joi.string().allow(null),
    });
}
