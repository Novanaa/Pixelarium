import CookiesData from "@/interfaces/types/Cookies";
import DecodedUser from "@/interfaces/types/DecodedUser";
import getServerSideCookiesData from "@/utils/getServerSideCookiesData";
import { jwtDecode } from "jwt-decode";

/**
 * Retrieves the decoded user data from the server-side cookies.
 *
 * @returns {Promise<DecodedUser | null>} The decoded user data or null if an error occurs.
 */
export default async function getServerSideUserData(): Promise<DecodedUser | null> {
  try {
    const cookiesData: CookiesData = getServerSideCookiesData();

    const decodedUser: DecodedUser = jwtDecode(cookiesData.cookies.session!, {
      header: false,
    });

    return decodedUser;
  } catch (err) {
    return null;
  }
}
