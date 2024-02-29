export type TDecodedUser = {
  providerId: number;
  email: string;
  name: string;
  picture: string;
  iat: number;
  exp: number;
};

export interface TDecodedToken extends TDecodedUser {
  sub: string;
  iat: number;
  exp: number;
}
