import type DecodedTokenRequest from "./types/DecodedTokenRequest";

declare module "express" {
  interface Request {
    decoded?: DecodedTokenRequest;
  }
}
