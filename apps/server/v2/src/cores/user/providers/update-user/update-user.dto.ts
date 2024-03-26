import { WebResponse } from "@/model/app.model";
import { User } from "@prisma/client";
import { Express } from "express";

export class UpdateUserRequestDto {
  name: string;
  bio: string;
}

export class UpdateUserResponsetDto extends WebResponse {
  updated_user: User;
  updated_field: UpdateUserRequestDto;
}

export class UpdateUserParams {
  name: string;
  payload: UpdateUserRequestDto;
  avatar: Express.Multer.File;
}
