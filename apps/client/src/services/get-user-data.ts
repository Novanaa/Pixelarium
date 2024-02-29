import getCookiesData from "@/utils/get-cookies-data";
import CookiesData from "@/interfaces/types/Cookies";
import { jwtDecode } from "jwt-decode";
import DecodedUser from "@/interfaces/types/DecodedUser";

/**
 * Retrieves user data from the API based on the provided name.
 *
 * @returns A Promise that resolves to the user data if successful, or null if an error occurs.
 */
export default async function getUserData(): Promise<DecodedUser | null> {
  try {
    const cookiesData: Awaited<CookiesData> = await getCookiesData();

    const decodedUser: DecodedUser = jwtDecode(cookiesData.cookies.session!, {
      header: false,
    });

    return decodedUser;
  } catch (err) {
    return null;
  }
}
