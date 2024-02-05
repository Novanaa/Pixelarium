import axios, { AxiosResponse } from "axios";
import apiUrlEndpoint from "@/constant/readonly/apiUrlEndpoint";
import User from "@/interfaces/types/User";
import getUsername from "@/utils/getUsername";

/**
 * Retrieves user data from the API based on the provided name.
 *
 * @returns A Promise that resolves to the user data if successful, or null if an error occurs.
 */
export default async function getUserData(): Promise<User | null> {
  try {
    const name: Awaited<string> = await getUsername();
    const user: Awaited<AxiosResponse> = await axios.get(
      `${apiUrlEndpoint}/v1/users/${name}`,
    );

    return user.data.user as User;
  } catch (err) {
    return null;
  }
}
