import errorException from "@/exceptions/error-exception";
import ErrorResponse from "@/interfaces/types/ErrorResponse";
import userLogout, { LogoutAPIResponse } from "@/services/user-logout";
import { AxiosError } from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface UserLogoutHandlerParams {
  router: AppRouterInstance;
  setIsUserLogoutLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Handles the logout functionality for the user.
 *
 * @param {UserLogoutHandlerParams} params - The parameters for the logout handler.
 * @param {AppRouterInstance} params.router - The router instance for navigation.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} params.setIsUserLogoutLoading - The state setter for the loading status.
 *
 * @returns {Promise<void>} - A promise that resolves when the logout process is completed.
 *
 * @throws {Error} - If there is an error during the logout process.
 */
const userLogoutHandler = async ({
  router,
  setIsUserLogoutLoading,
}: UserLogoutHandlerParams): Promise<void> => {
  try {
    setIsUserLogoutLoading(true);

    const response: Awaited<LogoutAPIResponse> = await userLogout();

    if (response.logouted) {
      setIsUserLogoutLoading(false);

      router.push("/");
      location.reload();
    }
  } catch (err) {
    setIsUserLogoutLoading(false);
    const apiError = err as AxiosError<ErrorResponse>;
    const apiErrorMessege: string | undefined = apiError.response?.data.messege;

    if (apiErrorMessege) errorException(apiErrorMessege);

    errorException();
  }
};

export default userLogoutHandler;
