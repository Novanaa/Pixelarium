import { BITBUCKET_CLIENT_ID } from "../../../../../const/env";

export const OAuthBitbucketUrl: string = `https://bitbucket.org/site/oauth2/authorize?client_id=${BITBUCKET_CLIENT_ID}&response_type=code`;
