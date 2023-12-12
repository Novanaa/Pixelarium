import { google } from "googleapis";
import {
  CLIENT_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from "../../const/env";

/* The code is creating an instance of the `OAuth2` class from the `google.auth` module. It takes three
arguments: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, and `/v1/auth/google/callback`. */
export const OAuth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  `${CLIENT_URL}/v1/auth/google/callback`
);

/* The `const scopes` array is defining the scopes or permissions that the application is requesting
from the user when they authenticate with their Google account. */
const scopes = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/plus.me",
];

/* The code is generating the authorization URL that the user will be redirected to in order to
authenticate with their Google account. */
export const authUrl = OAuth2Client.generateAuthUrl({
  access_type: "offline",
  scope: scopes,
  include_granted_scopes: true,
  prompt: "consent",
});
