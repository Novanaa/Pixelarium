import { Injectable } from "@nestjs/common";
import { GeneratedClientKeysCredentials } from "./credentials";

@Injectable()
export class CredentialsProvider {
  public generateClientKeys(): GeneratedClientKeysCredentials {
    return { clientId: "", clientSecret: "" };
  }
}
