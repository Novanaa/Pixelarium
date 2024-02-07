"use client";

import Container from "@/components/ui/Container";
import React, { use, useState } from "react";
import LogoIcons from "@/components/ui/LogoIcons";
import { HeadingThree } from "@/components/ui/Typographies/Heading";
import UserAvatar from "@/components/ui/UserAvatar";
import Paragraph from "@/components/ui/Typographies/Paragraph";
import { Button } from "@/components/ui/button";
import getUserData from "@/services/getUserData";
import DecodedUser from "@/interfaces/types/DecodedUser";
import { Skeleton } from "@/components/ui/skeleton";
import userLogout, { LogoutAPIResponse } from "@/services/userLogout";
import { AxiosError } from "axios";
import type ErrorResponse from "@/interfaces/types/ErrorResponse";
import errorException from "@/exceptions/errorException";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function Logout(): React.ReactElement {
  return (
    <main className="relative h-[95vh] w-full pt-[10rem] @container">
      <Container className="flex flex-col items-center justify-center gap-4">
        <LogoIcons />
        <HeadingThree className="flex items-center text-center">
          Thank you for your time spent here!
        </HeadingThree>
        <UserCard />
      </Container>
    </main>
  );
}

const userQuery = getUserData();
function UserCard(): React.ReactElement {
  const [isUserLogoutLoading, setIsUserLogoutLoading] =
    useState<boolean>(false);
  const router: AppRouterInstance = useRouter();
  const userData: DecodedUser | null = use(userQuery);
  const isLoading: boolean = userData == null;

  const logoutHandler = async (): Promise<void> => {
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
      const apiErrorMessege: string | undefined =
        apiError.response?.data.messege;

      if (apiErrorMessege) errorException(apiErrorMessege);

      errorException();
    }
  };

  return (
    <section className="rounded-lg border px-5 py-4">
      <div className="flex items-center gap-2 @lg:gap-3">
        {isLoading ? (
          <Skeleton className="h-10 w-10 rounded-full" />
        ) : (
          <UserAvatar user={userData} className="h-auto" />
        )}
        {isLoading ? (
          <Skeleton className="h-4 w-24 rounded" />
        ) : (
          <Paragraph className="text-sm @lg:text-base">
            Signed in as <span className="font-semibold">{userData?.name}</span>
          </Paragraph>
        )}
        <Button
          variant="outline"
          disabled={isUserLogoutLoading || isLoading}
          onClick={() => logoutHandler()}
        >
          {isUserLogoutLoading ? (
            <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : (
            <>Sign Out</>
          )}
        </Button>
      </div>
    </section>
  );
}
