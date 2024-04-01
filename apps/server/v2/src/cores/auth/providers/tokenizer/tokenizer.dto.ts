import { WebResponse } from "@/model/app.model";

export class TokenizerUserCredentials {
  access_token: string;
  expires_in: number;
}

export class TokenizerResponseDto extends WebResponse {
  credentials: TokenizerUserCredentials;
}
