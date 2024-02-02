import axios, { AxiosResponse } from "axios";
import apiUrlEndpoint from "@/constant/readonly/apiUrlEndpoint";
import User from "@/interfaces/types/User";

/**
 * Retrieves user data from the API based on the provided name.
 *
 * @param name - The name of the user to retrieve data for.
 * @returns A Promise that resolves to the user data if successful, or null if an error occurs.
 */
export default async function getUserData(name: string): Promise<User | null> {
  try {
    const user: Awaited<AxiosResponse> = await axios.get(
      `${apiUrlEndpoint}/v1/users/${name}`,
    );

    return user.data as User;
  } catch (err) {
    return null;
  }
}
