import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import getCookiesData from "@/utils/getCookiesData";
import CookiesData from "@/interfaces/types/Cookies";
import defaultErrorMessege from "@/constant/readonly/defaultErrorMessege";
import getUserData from "./getUserData";
import DecodedUser from "@/interfaces/types/DecodedUser";

type SetUserLoginParams = {
  router: AppRouterInstance;
};

export default async function setUserLogin({
  router,
}: SetUserLoginParams): Promise<void> {
  try {
    const cookiesData: Awaited<CookiesData> = await getCookiesData();
    const user: Awaited<DecodedUser | null> = await getUserData();

    const { isLoggedIn, session } = cookiesData.cookies;
    if (isLoggedIn == "yes" && session) {
      router.push("/profile/" + user?.name);
    }
  } catch (err) {
    if (err) throw new Error(defaultErrorMessege);
  }
}
