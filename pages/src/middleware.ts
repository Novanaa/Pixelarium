import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import getServerSideUserLoginStatus from "./services/getServerSideUserLoginStatus";
import DecodedUser from "./interfaces/types/DecodedUser";
import getServerSideUserData from "./services/getServerSideUserData";

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const user: Awaited<DecodedUser | null> = await getServerSideUserData();
  const isLogin = getServerSideUserLoginStatus();
  const nextUrlPathname: string = req.nextUrl.pathname;
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-pathname", nextUrlPathname);

  if (nextUrlPathname.startsWith("/auth")) {
    if (nextUrlPathname.startsWith("/auth/login")) {
      if (isLogin) return NextResponse.redirect(new URL("/profile", req.url));
    }

    if (nextUrlPathname.startsWith("/auth/logout")) {
      if (!isLogin)
        return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  if (nextUrlPathname.startsWith("/profile")) {
    if (!isLogin) return NextResponse.redirect(new URL("/auth/login", req.url));

    if (nextUrlPathname == "/profile")
      return NextResponse.redirect(new URL(`/profile/${user?.name}`, req.url));
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/profile/:name*", "/auth/(.*)", "/developers/(.*)"],
};
