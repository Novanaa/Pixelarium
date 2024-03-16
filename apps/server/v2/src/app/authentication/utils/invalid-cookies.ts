import { AuthenticationCookies } from "@/interfaces/cookies";

/**
 * Checks if the provided cookies are invalid.
 *
 * @param cookies - The authentication cookies to be checked.
 * @returns If the cookies are invalid, returns an unauthorized error.
 */
export default function invalidCookies(cookies: AuthenticationCookies) {
  return !Object.keys(cookies).length || !cookies.session;
}
