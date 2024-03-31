import axios from "axios";
import { Environment } from "@/configs/readonly";
import { AuthConstant } from "@/constant/auth.constant";
import { ForbiddenException, Injectable } from "@nestjs/common";
import { GithubCredentials } from "../../../cores/auth/providers/github/github.dto";
import { ErrorProvider } from "@/common/providers";

@Injectable()
export class GithubProvider {
  constructor(private readonly error: ErrorProvider) {}

  private readonly authenticationUrl: string = `${AuthConstant.GITHUB_OAUTH_URL}/authorize?client_id=${Environment.GITHUB.CLIENT_ID}&redirect_uri=${Environment.HOSTNAME}/auth/github/callback&allow_signup=true&scope=user%20user:email&prompt=consent`;

  private readonly credentialsUrl: string = `${AuthConstant.GITHUB_OAUTH_URL}/access_token?client_id=${Environment.GITHUB.CLIENT_ID}&client_secret=${Environment.GITHUB.CLIENT_SECRET}&redirect_uri=${Environment.HOSTNAME}/auth/github/callback`;

  private readonly githubApiEndpoint: string = "https://api.github.com";

  public getAuthenticationURL(): string {
    return this.authenticationUrl;
  }

  public async getCredentials(code: string): Promise<GithubCredentials> {
    try {
      return (
        await axios.post(`${this.credentialsUrl}&code=${code}`, new Object(), {
          headers: { Accept: "application/json" },
        })
      ).data satisfies GithubCredentials;
    } catch (err) {
      throw new ForbiddenException(
        this.error.forbidden("Something wrong during authentication!")
      );
    }
  }

  public async getUser(credentials: GithubCredentials) {
    try {
      return (
        await axios.get(this.githubApiEndpoint + "/user", {
          headers: {
            Accept: "application/json",
            Authorization: `${credentials.token_type} ${credentials.access_token}`,
          },
        })
      ).data;
    } catch (err) {
      throw new ForbiddenException(
        this.error.forbidden("Something wrong during authentication!")
      );
    }
  }
}
