import { Environment } from "@/configs/readonly";
import { AuthConstant } from "@/constant/auth.constant";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GithubProvider {
  public getAuthenticationURL(): string {
    return `${AuthConstant.GITHUB_OAUTH_URL}/authorize?client_id=${Environment.GITHUB.CLIENT_ID}&redirect_uri=${Environment.HOSTNAME}/auth/github/callback&allow_signup=true&scope=user%20user:email&prompt=consent`;
  }
}
