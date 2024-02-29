"use client";

import UserAvatar from "@/components/molecules/user-avatar";
import Paragraph from "@/components/molecules/typographies/Paragraph";
import { Button } from "@/components/ui/button";
import getUserData from "@/services/getUserData";
import DecodedUser from "@/interfaces/types/DecodedUser";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReloadIcon } from "@radix-ui/react-icons";
import React, { use, useState } from "react";
import userLogoutHandler from "./services/userLogoutHandler";
import dynamic from "next/dynamic";

const userQuery = getUserData();
function LogoutUserCard(): React.ReactElement {
  const [isUserLogoutLoading, setIsUserLogoutLoading] =
    useState<boolean>(false);
  const router: AppRouterInstance = useRouter();
  const userData: DecodedUser | null = use(userQuery);

  return (
    <section className="rounded-lg border px-5 py-4">
      <div className="flex items-center gap-2 @lg:gap-3">
        <UserAvatar user={userData} className="h-auto" />
        <Paragraph className="text-sm @lg:text-base">
          Signed in as <span className="font-semibold">{userData?.name}</span>
        </Paragraph>
        <Button
          variant="outline"
          disabled={isUserLogoutLoading}
          onClick={() => userLogoutHandler({ router, setIsUserLogoutLoading })}
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

function Loading(): React.ReactElement {
  return (
    <section className="rounded-lg border px-5 py-4">
      <div className="flex items-center gap-2 @lg:gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-4 w-28 rounded" />
        <Button variant="outline" disabled={true}>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      </div>
    </section>
  );
}

export default dynamic(() => Promise.resolve(LogoutUserCard), {
  ssr: false,
  loading: () => <Loading />,
});
