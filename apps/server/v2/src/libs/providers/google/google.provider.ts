import { google, Auth } from "googleapis";
import { AuthConstant } from "@/constant/auth.constant";
import { Injectable } from "@nestjs/common";
import { Environment } from "@/configs/readonly";

@Injectable()
export class GoogleProvider {
  public getclient(): Auth.OAuth2Client {
    return new google.auth.OAuth2(
      Environment.GOOGLE.CLIENT_ID,
      Environment.GOOGLE.CLIENT_SECRET,
      Environment.HOSTNAME + "/auth/google"
    );
  }

  public getAuthenticationUrl(): string {
    return this.getclient().generateAuthUrl({
      access_type: "offline",
      scope: AuthConstant.GOOGLE_AUTH_SCOPES,
      include_granted_scopes: true,
      prompt: "consent",
    });
  }
}
