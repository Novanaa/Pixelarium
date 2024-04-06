import * as crypto from "crypto";
import { Injectable } from "@nestjs/common";
import {
  GenerateClientKeysCredentialsParams,
  GeneratedClientKeysCredentials,
} from "./credentials";

@Injectable()
export class CredentialsProvider {
  public generateClientKeys(
    param: GenerateClientKeysCredentialsParams
  ): GeneratedClientKeysCredentials {
    const clientId: string = crypto
      .createHash("md5")
      .update(param.name)
      .digest("hex");
    const clientSecret: string = crypto
      .createHash("sha256")
      .update(String(param.originCode))
      .digest("hex");

    return { clientId, clientSecret };
  }
}
