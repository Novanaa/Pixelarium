"use client";

import errorException from "@/exceptions/errorException";
import { useEffect } from "react";
import React from "react";
import {
  ReadonlyURLSearchParams,
  useRouter as useRouterNav,
  useSearchParams,
} from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Container from "@/components/ui/Container";
import setUserLogin from "@/services/setUserLogin";
import { HeadingTwo } from "@/components/ui/Typographies/Heading";
import { LineWave } from "react-loader-spinner";
import MutedText from "@/components/ui/Typographies/MutedText";

function LoginCallback() {
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

  return (
    <Container className="flex h-screen w-full flex-col items-center justify-center gap-3 text-center">
      <div className="relative left-[1.7rem]">
        <LineWave width={160} color="white" height={160} />
      </div>
      <div className="flex flex-col gap-2">
        <HeadingTwo className="text-[1.7rem] font-extrabold sm:text-[1.85rem]">
          Welcome to Pixelarium!
        </HeadingTwo>
        <MutedText>Your request is proccessed...</MutedText>
      </div>
    </Container>
  );
}

export default LoginCallback;
