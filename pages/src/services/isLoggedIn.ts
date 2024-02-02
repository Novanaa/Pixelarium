import CookiesData from "@/interfaces/types/Cookies";
import axios, { AxiosResponse } from "axios";

/**
 * Checks if the user is logged in.
 * 
 * @returns {Promise<boolean>} A promise that resolves to true if the user is logged in, and false otherwise.
 */
export default async function isLoggedIn(): Promise<boolean> {
  try {
    const cookies: Awaited<AxiosResponse<CookiesData>> =
      await axios.get("/api/v1/cookies");

    const { isLoggedIn, session } = cookies.data.cookies;

    if ((!isLoggedIn && !session) || !session) return false;

    return true;
  } catch (err) {
    return false;
  }
}
