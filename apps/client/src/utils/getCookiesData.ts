import CookiesData from "@/interfaces/types/Cookies";
import axios from "axios";

/**
 * Retrieves the cookies data from the server.
 *
 * @returns {Promise<CookiesData>} A promise that resolves to the cookies data.
 */
export default async function getCookiesData(): Promise<CookiesData> {
  return (await (
    await axios.get("/api/v1/cookies")
  ).data) as Promise<CookiesData>;
}
