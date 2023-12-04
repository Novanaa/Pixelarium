import {
  BITBUCKET_CLIENT_ID,
  BITBUCKET_CLIENT_SECRET,
} from "../../../../const/env";
import { OAuthBitbucketAccessTokenUrl } from "../const/readonly/bitbucketOAuthUrl";
import TBitbucketAccessToken from "../interfaces/types/BitbucketAccessTokenTypes";

export async function grantBitbucketAccessToken({ code }: { code: string }) {
  const credential: string = btoa(
    `${BITBUCKET_CLIENT_ID}:${BITBUCKET_CLIENT_SECRET}`
  );

  const data: URLSearchParams = new URLSearchParams();
  data.append("grant_type", "authorization_code");
  data.append("code", encodeURIComponent(code));

  const headers: Headers = new Headers();
  headers.append("Authorization", `Basic ${credential}`);
  headers.append("Content-Type", "application/x-www-form-urlencoded");

  const options: RequestInit = {
    method: "POST",
    headers,
    body: data,
  };

  const response = await fetch(OAuthBitbucketAccessTokenUrl, options);
  const OAuthAccessToken = (await response.json()) as TBitbucketAccessToken;

  return OAuthAccessToken;
}
