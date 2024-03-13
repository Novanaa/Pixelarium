/* eslint-disable semi */

export default interface Cookies {
  [cookieName: string]: string | undefined;
}

export interface AuthenticationCookies extends Cookies {
  session: string | undefined;
  logged_in: string | undefined;
  logged_as: string | undefined;
}
