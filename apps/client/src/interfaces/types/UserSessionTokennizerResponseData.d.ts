export default interface UserSessionTokennizerResponseData {
  generated: boolean;
  status: "OK" | "KO";
  token: Token;
}

interface Token {
  accessToken: string;
  expiresDate: number;
  expiresInSecond: number;
}
