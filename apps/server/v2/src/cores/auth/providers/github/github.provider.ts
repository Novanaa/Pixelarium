import { HttpRedirectResponse, HttpStatus, Injectable } from "@nestjs/common";
import { UserInfoProvider } from "../userinfo/userinfo.provider";
import { GithubProvider } from "@/libs/providers";
import { Response } from "express";
import {
  GithubCredentials,
  GithubUserInfo,
} from "@/cores/auth/providers/github/github.dto";
import { User } from "@prisma/client";
import { UserInfoCreateUserDto } from "../userinfo/userinfo.dto";
import { UserInfoGenerateCredentials } from "../userinfo/userinfo";

@Injectable()
export class GithubAuthProvider {
  constructor(
    private readonly userInfo: UserInfoProvider,
    private readonly github: GithubProvider
  ) {}

  public loginWithGithub(): HttpRedirectResponse {
    return {
      url: this.github.getAuthenticationURL(),
      statusCode: HttpStatus.MOVED_PERMANENTLY,
    };
  }

  public async githubAuthenticationCallback(
    res: Response,
    code: string
  ): Promise<HttpRedirectResponse> {
    const credentials: Awaited<GithubCredentials> =
      (await this.github.getCredentials(code)) satisfies GithubCredentials;

    const userinfo: Awaited<GithubUserInfo> = (await this.github.getUser(
      credentials
    )) satisfies GithubUserInfo;

    const userOriginCode: number = Math.floor(
      Number(userinfo.id) / Number(10n ** 2n)
    );
    const user: Awaited<User> =
      await this.userInfo.retrieveUserByOriginCode(userOriginCode);

    if (!user) {
      const userinfoPayload: UserInfoCreateUserDto = {
        avatar: userinfo.avatar_url,
        email: userinfo.email,
        name: userinfo.login,
        originCode: userOriginCode,
        bio: userinfo.bio,
      } satisfies UserInfoCreateUserDto;

      const createdUser: Awaited<User> =
        await this.userInfo.createUser(userinfoPayload);

      const userinfoCredentials: UserInfoGenerateCredentials =
        this.userInfo.generateCredentials(
          createdUser
        ) satisfies UserInfoGenerateCredentials;

      this.userInfo.generateResponseCookie({
        res,
        session: userinfoCredentials.refreshToken,
        username: createdUser.name,
      });

      return {
        url: this.userInfo.generateRedirectURL(userinfoCredentials.accessToken),
        statusCode: HttpStatus.MOVED_PERMANENTLY,
      };
    }

    const userinfoCredentials: UserInfoGenerateCredentials =
      this.userInfo.generateCredentials(
        user
      ) satisfies UserInfoGenerateCredentials;

    this.userInfo.generateResponseCookie({
      res,
      session: userinfoCredentials.refreshToken,
      username: user.name,
    });

    return {
      url: this.userInfo.generateRedirectURL(userinfoCredentials.accessToken),
      statusCode: HttpStatus.MOVED_PERMANENTLY,
    };
  }
}
