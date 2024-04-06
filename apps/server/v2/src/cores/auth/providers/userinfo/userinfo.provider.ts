import slugify from "slugify";
import { User } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import * as jsonwebtoken from "jsonwebtoken";
import { PrismaProvider } from "@/libs/providers";
import { UserInfoCreateUserDto } from "./userinfo.dto";
import { PictureConstant } from "@/constant/picture.constant";
import { RetrieveUserProvider } from "@/cores/user/providers";
import {
  UserInfoGenerateCredentials,
  UserInfoGenerateResponseCookieParam,
} from "./userinfo";
import { AuthConstant } from "@/constant/auth.constant";
import { Environment } from "@/configs/readonly";
import { CredentialsProvider } from "@/cores/client-keys/providers";
import { GeneratedClientKeysCredentials } from "@/cores/client-keys/providers/credentials/credentials";

@Injectable()
export class UserInfoProvider {
  constructor(
    private readonly retrieveUser: RetrieveUserProvider,
    private readonly prisma: PrismaProvider,
    private readonly clientKeysCredentials: CredentialsProvider
  ) {}

  private readonly RegexPattern: RegExp =
    /[\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?0-9]/g;

  public async retrieveUserByOriginCode(code: number): Promise<User> {
    return await this.retrieveUser.retrieveUserByOriginCode(code);
  }

  public async createUser(userinfo: UserInfoCreateUserDto): Promise<User> {
    const name: string = slugify(userinfo.name, {
      lower: true,
      remove: this.RegexPattern,
    });
    const credentials: GeneratedClientKeysCredentials =
      this.clientKeysCredentials.generateClientKeys({
        name,
        originCode: userinfo.originCode,
      });

    return await this.prisma.user.create({
      data: {
        avatar: userinfo.avatar || PictureConstant.DEFAULT_AVATAR,
        name,
        email: userinfo.email,
        origin_code: userinfo.originCode,
        type: "User",
        is_member: false,
        bio: !userinfo.bio
          ? "Hello! It seems that this account does not have a bio."
          : userinfo.bio,
        client_key: {
          create: {
            client_id: credentials.clientId,
            client_secret: credentials.clientSecret,
          },
        },
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

  public generateResponseCookie(
    param: UserInfoGenerateResponseCookieParam
  ): void {
    param.res.cookie("session", param.session, AuthConstant.COOKIE_OPTIONS);
    param.res.cookie("logged_in", "yes", AuthConstant.COOKIE_OPTIONS);
    param.res.cookie("logged_as", param.username, AuthConstant.COOKIE_OPTIONS);
  }

  public generateRedirectURL(session: string): string {
    return `${Environment.CLIENT_HOSTNAME}/auth/login/callback?session=${session}&type=success`;
  }
}
