import axios, { AxiosError } from "axios";
import apiUrlEndpoint from "@/constant/readonly/apiUrlEndpoint";
import User from "@/interfaces/types/User";
import ErrorResponse from "@/interfaces/types/ErrorResponse";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type SetUserLoginParams = {
  name: string | null;
  router: AppRouterInstance;
};

export default async function setUserLogin({
  name,
  router,
}: SetUserLoginParams): Promise<void> {
  try {
    const user: Awaited<User | null> = await axios.get(
      `${apiUrlEndpoint}/v1/users/${name}`,
    );

    if (user) router.push("/dashboard");
  } catch (err) {
    const error = err as AxiosError<ErrorResponse>;

    if (error.response?.data) {
      const errorMessege: string =
        (error.response?.data.messege as string) ||
        "Unexpected Errors Occurred";

      router.push(`/auth/login?messege=${errorMessege}&type=failed`);
    }
  }
}
