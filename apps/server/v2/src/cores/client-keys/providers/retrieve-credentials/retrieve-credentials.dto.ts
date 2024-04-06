import { WebResponse } from "@/model/app.model";
import { ClientKey } from "@prisma/client";

export class RetrieveUserClientCredentialsKeysResponseDto extends WebResponse {
  credentials_keys: ClientKey;
}
