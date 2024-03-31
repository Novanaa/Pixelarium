import slugify from "slugify";
import { User } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { PrismaProvider } from "@/libs/providers";
import { UserInfoCreateUserDto } from "./userinfo.dto";
import { PictureConstant } from "@/constant/picture.constant";
import { RetrieveUserProvider } from "@/cores/user/providers";

@Injectable()
export class UserInfoProvider {
  constructor(
    private readonly retrieveUser: RetrieveUserProvider,
    private readonly prisma: PrismaProvider
  ) {}

  private readonly RegexPattern: RegExp =
    /[\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?0-9]/g;

  public async retrieveUserByOriginCode(code: number): Promise<User> {
    return await this.retrieveUser.retrieveUserByOriginCode(code);
  }

  public async createUser({
    avatar,
    email,
    name,
    originCode,
  }: UserInfoCreateUserDto): Promise<User> {
    return await this.prisma.user.create({
      data: {
        avatar: avatar || PictureConstant.DEFAULT_AVATAR,
        name: slugify(name, { lower: true, remove: this.RegexPattern }),
        email,
        origin_code: originCode,
        type: "User",
        is_member: false,
        bio: "Hello! It seems that this account does not have a bio.",
      },
    });
  }
}
