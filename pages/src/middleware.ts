import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import getServerSideUserLoginStatus from "./services/getServerSideUserLoginStatus";

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const isLogin = getServerSideUserLoginStatus();

  if (req.nextUrl.pathname.startsWith("/auth/login")) {
    if (isLogin) return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    if (!isLogin) return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/auth/login"],
};
