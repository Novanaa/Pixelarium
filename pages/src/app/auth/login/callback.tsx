import { NextRouter, useRouter } from "next/router";
import errorException from "@/exceptions/errorException";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import type DecodedUser from "@/interfaces/types/DecodedUser";
import React from "react";
import { useRouter as useRouterNav } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Container from "@/components/ui/Container";
import setUserLogin from "@/services/setUserLogin";
import { HeadingTwo } from "@/components/ui/Typographies/Heading";
import { LineWave } from "react-loader-spinner";
import MutedText from "@/components/ui/Typographies/MutedText";

function LoginCallback() {
  const [decodedUser, setDecodedUser] = useState<DecodedUser | null>(null);

  const routerNav: AppRouterInstance = useRouterNav();
  const router: NextRouter = useRouter();
  const sessionToken: string = String(router.query.session);
  const loginType: string = String(router.query.type);

  useEffect(() => {
    if (router.isReady) {
      if (!sessionToken) errorException("Something wrong happend!");

      if (loginType !== "success")
        errorException("The authentication proccess was failed");

      const decodedUser: DecodedUser = jwtDecode(sessionToken);

      setDecodedUser(decodedUser);
    }

    return () => setDecodedUser(null);
  }, [sessionToken, loginType, router.isReady]);

  useEffect(() => {
    setUserLogin({ name: decodedUser?.name || null, router: routerNav });
  }, [decodedUser, router.isReady, routerNav]);

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
