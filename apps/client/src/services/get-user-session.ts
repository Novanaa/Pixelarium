import apiUrlEndpoint from "@/constant/readonly/api-url-endpoint";
import UserSessionTokennizerResponseData from "@/interfaces/types/UserSessionTokennizerResponseData";
import axios, { AxiosResponse } from "axios";

export default async function getUserSession(): Promise<UserSessionTokennizerResponseData> {
  const userSession: Awaited<AxiosResponse<UserSessionTokennizerResponseData>> =
    await axios.get(`${apiUrlEndpoint}/v1/auth/token`, {
      withCredentials: true,
    });

  return userSession.data;
}
