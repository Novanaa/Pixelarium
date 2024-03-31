import slugify from "slugify";
import { User } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import * as jsonwebtoken from "jsonwebtoken";
import { PrismaProvider } from "@/libs/providers";
import { UserInfoCreateUserDto } from "./userinfo.dto";
import { PictureConstant } from "@/constant/picture.constant";
import { RetrieveUserProvider } from "@/cores/user/providers";
import { UserInfoGenerateCredentials } from "./userinfo";
import { AuthConstant } from "@/constant/auth.constant";
import { Environment } from "@/configs/readonly";

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

  public async createUser(userinfo: UserInfoCreateUserDto): Promise<User> {
    return await this.prisma.user.create({
      data: {
        avatar: userinfo.avatar || PictureConstant.DEFAULT_AVATAR,
        name: slugify(userinfo.name, {
          lower: true,
          remove: this.RegexPattern,
        }),
        email: userinfo.email,
        origin_code: userinfo.originCode,
        type: "User",
        is_member: false,
        bio: "Hello! It seems that this account does not have a bio.",
      },
    });
  }

  public generateCredentials(payload: User): UserInfoGenerateCredentials {
    delete payload.password;

    const accessToken: string = jsonwebtoken.sign(
      payload,
      Environment.JSONWEBTOKEN.ACCESS_TOKEN,
      {
        ...AuthConstant.USER_CREDENTIALS_OPTIONS,
        expiresIn: AuthConstant.ACCESS_TOKEN_EXPIRES,
      }
    );

    const refreshToken: string = jsonwebtoken.sign(
      payload,
      Environment.JSONWEBTOKEN.REFRESH_TOKEN,
      {
        ...AuthConstant.USER_CREDENTIALS_OPTIONS,
        expiresIn: AuthConstant.REFRESH_TOKEN_EXPIRES,
      }
    );

    return { accessToken, refreshToken };
  }
}
