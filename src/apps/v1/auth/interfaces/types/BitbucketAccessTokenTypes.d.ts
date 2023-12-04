type TBitbucketAccessToken = {
  access_token: string;
  scopes: string;
  token_type: string;
  expires_in: number;
  state: string;
  refresh_token: string;
};

export default TBitbucketAccessToken;
