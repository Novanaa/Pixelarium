import React, { useEffect } from "react";
import Layout from "../../Layout";
import { Card } from "@/components/ui/card";
import { HeadingTwo } from "@/components/ui/Typographies/Heading";
import { jakartaSans } from "@/configs/fonts";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import MutedText from "@/components/ui/Typographies/MutedText";
import Link from "next/link";
import { SiGoogle, SiBitbucket } from "react-icons/si";
import apiUrlEndpoint from "@/constant/readonly/apiUrlEndpoint";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { NextRouter, useRouter as useNextRouter } from "next/router";

function Login() {
  const router: AppRouterInstance = useRouter();
  const nextRouter: NextRouter = useNextRouter();
  const { toast } = useToast();

  const type: string = String(nextRouter.query.type);
  const messege: string = String(nextRouter.query.messege);

  useEffect(() => {
    if (nextRouter.query && nextRouter.isReady) {
      if (type == "failed")
        toast({
          title: "Unexpected Error",
          description: messege,
        });
    }
  }, [messege, type, nextRouter.isReady, toast, nextRouter.query]);

  return (
    <Layout>
      <section className="flex h-screen w-full flex-col items-center justify-center gap-2">
        <Card className="flex flex-col items-center justify-center gap-3 px-[1.4rem] py-6 sm:px-10">
          <div>
            <HeadingTwo
              className={`${jakartaSans.variable} font-sans text-[1.55rem] font-bold opacity-90 sm:text-[1.75rem]`}
            >
              Login to <span className="border-b">Pixelarium</span>
            </HeadingTwo>
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => router.push(`${apiUrlEndpoint}/v1/auth/github`)}
              className={`${jakartaSans.variable} flex h-12 items-center gap-2 border-b-2 font-sans font-semibold sm:text-[1rem]`}
            >
              <GitHubLogoIcon width={23} height={23} />
              Continue with Github
            </Button>
            <Button
              size="lg"
              onClick={() => router.push(`${apiUrlEndpoint}/v1/auth/google`)}
              className={`${jakartaSans.variable} flex h-12 items-center gap-2 border-b-2 font-sans font-semibold sm:text-[1rem]`}
            >
              <SiGoogle width={25} height={25} />
              Continue with Google
            </Button>
            <Button
              disabled
              size="lg"
              onClick={() => router.push(`${apiUrlEndpoint}/v1/auth/bitbucket`)}
              className={`${jakartaSans.variable} flex h-12 items-center gap-2 border-b-2 bg-[#0052CC] font-sans font-semibold text-white sm:text-[1rem]`}
            >
              <SiBitbucket width={23} height={23} />
              Continue with Bitbucket
            </Button>
          </div>
        </Card>
        <MutedText className="relative top-1 w-[85%] text-center text-[0.75rem] tracking-wider sm:w-full">
          By clicking on Continue, you agree to our{" "}
          <Link href="/tos" className="border-b-2 dark:text-white">
            terms of service.
          </Link>
        </MutedText>
      </section>
      <Toaster />
    </Layout>
  );
}

export default Login;
