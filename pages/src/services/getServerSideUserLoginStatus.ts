import getServerSideCookiesData from "@/utils/getServerSideCookiesData";

/**
 * Function: getServerSideUserLoginStatus
 *
 * Description:
 * This function is responsible for retrieving the user login status on the server side.
 * It checks if the user is logged in and has an active session.
 *
 * Returns:
 * - true if the user is logged in and has an active session.
 * - false if the user is not logged in or does not have an active session.
 *
 * Throws:
 * - Any error that occurs during the execution of the function.
 */
export default function getServerSideUserLoginStatus(): boolean {
  try {
    const cookiesData: CookiesData = getServerSideCookiesData();

    const { isLoggedIn, session } = cookiesData.cookies;

    if ((!isLoggedIn && !session) || !session) return false;

    return true;
  } catch (err) {
    return false;
  }
}
