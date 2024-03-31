import { HttpRedirectResponse, HttpStatus, Injectable } from "@nestjs/common";
import { UserInfoProvider } from "../userinfo/userinfo.provider";
import { GithubProvider } from "@/libs/providers";

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
}
