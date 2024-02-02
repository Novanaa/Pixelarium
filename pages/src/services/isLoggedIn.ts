import CookiesData from "@/interfaces/types/Cookies";
import getCookiesData from "@/utils/getCookiesData";

/**
 * Checks if the user is logged in.
 *
 * @returns {Promise<boolean>} A promise that resolves to true if the user is logged in, and false otherwise.
 */
export default async function isLoggedIn(): Promise<boolean> {
  try {
    const cookiesData: Awaited<CookiesData> = await getCookiesData();

    const { isLoggedIn, session } = cookiesData.cookies;

    if ((!isLoggedIn && !session) || !session) return false;

    return true;
  } catch (err) {
    return false;
  }
}
