import apiUrlEndpoint from "@/constant/readonly/apiUrlEndpoint";
import User from "@/interfaces/types/User";
import axios, { AxiosResponse } from "axios";

export interface LogoutAPIResponse {
  logouted: boolean;
  logutedUser: User;
  status: "OK" | "KO";
}

export default async function userLogout() {
  const logout: Awaited<AxiosResponse<LogoutAPIResponse>> = await axios.post(
    `${apiUrlEndpoint}/v1/auth/logout`,
    {},
    { withCredentials: true },
  );

  return logout.data;
}
