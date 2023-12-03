import {
  CLIENT_URL,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
} from "../../../../../const/env";

export const OAuthGithubUrl: string = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${CLIENT_URL}/v1/auth/github/callback&allow_signup=true&scope=user%20user:email`;

export const OAuthGithubAccessTokenUrl: string = `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&redirect_uri=${CLIENT_URL}/v1/auth/github/callback`;
