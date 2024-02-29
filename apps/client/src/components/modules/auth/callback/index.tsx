"use client";

import errorException from "@/exceptions/error-exception";
import { useEffect } from "react";
import React from "react";
import {
  ReadonlyURLSearchParams,
  useRouter as useRouterNav,
  useSearchParams,
} from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import setUserLogin from "@/services/set-user-login";
import LoginCallbackLoader from "./loader";

function UserAuthLoginCallback() {
  const routerNav: AppRouterInstance = useRouterNav();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const sessionToken: string = String(searchParams.get("session"));
  const loginType: string = String(searchParams.get("type"));

  useEffect(() => {
    if (!sessionToken) errorException("Something wrong happend!");

    if (loginType !== "success")
      errorException("The authentication proccess was failed");
  }, [sessionToken, loginType]);

  useEffect(() => {
    setUserLogin({
      router: routerNav,
    });
  }, [routerNav]);

  return <LoginCallbackLoader />;
}

export default UserAuthLoginCallback;
