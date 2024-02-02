import CookiesData from "@/interfaces/types/Cookies";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";

export default function getServerSideCookiesData(): CookiesData {
  const nextCookies: ReadonlyRequestCookies = cookies();

  const sessionToken: string | undefined = nextCookies.get("session")?.value;
  const loggedIn: string | undefined = nextCookies.get("logged_in")?.value;

  const cookiesData: CookiesData = {
    cookies: {
      session: sessionToken || null,
      isLoggedIn: (loggedIn as "yes") || null,
    },
  };

  return cookiesData;
}
