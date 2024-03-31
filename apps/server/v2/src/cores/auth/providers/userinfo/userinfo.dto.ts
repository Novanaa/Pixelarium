import { UserType } from "@prisma/client";

export class UserInfoCreateUserDto {
  avatar: string | null;
  name: string;
  email: string | null;
  originCode: number;
}

export class UserInfoCredentialsPayloadDto extends UserInfoCreateUserDto {
  id: string;
  type: UserType;
  bio: string;
  is_member: boolean;
}
