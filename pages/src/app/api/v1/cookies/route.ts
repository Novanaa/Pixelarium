import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const nextCookies: ReadonlyRequestCookies = cookies();

  const sessionToken: string | undefined = nextCookies.get("session")?.value;
  const loggedIn: string | undefined = nextCookies.get("logged_in")?.value;
  const loggedAs: string | undefined = nextCookies.get("logged_as")?.value;

  return NextResponse.json({
    cookies: {
      session: sessionToken || null,
      isLoggedIn: loggedIn || null,
      loggedAs: loggedAs || null,
    },
  });
}
