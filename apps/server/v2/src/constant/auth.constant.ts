import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthConstant {
  static readonly GOOGLE_AUTH_SCOPES: Array<string> = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/plus.me",
  ];
}
