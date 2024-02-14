import { HiHome, HiPlusCircle, HiSparkles } from "react-icons/hi";
import DashboardSidebarMobileMenuLink from "./DashboardSidebarMobileMenuLink";
import { CameraIcon } from "@radix-ui/react-icons";
import UserAvatar from "@/components/ui/UserAvatar";
import getServerSideUserData from "@/services/getServerSideUserData";
import DecodedUser from "@/interfaces/types/DecodedUser";
import React from "react";

export default async function DashboardSidebarMobileMenuLinksList(): Promise<React.ReactElement> {
  const user: Awaited<DecodedUser | null> = await getServerSideUserData();

  const iconStyle: string = "h-[1.85rem] w-[1.85rem]";

  return (
    <div className="flex w-full justify-evenly opacity-85 @md:w-[85%]">
      <DashboardSidebarMobileMenuLink
        title="Home"
        link="/"
        Icon={<HiHome className={iconStyle} />}
      />
      <DashboardSidebarMobileMenuLink
        title="Albums"
        link="/albums"
        Icon={<CameraIcon className={iconStyle} />}
      />
      <DashboardSidebarMobileMenuLink
        title="Upload"
        link="/profile/user?active=upload"
        Icon={<HiPlusCircle className={iconStyle} />}
      />
      <DashboardSidebarMobileMenuLink
        title="Gallery"
        link="/gallery"
        Icon={<HiSparkles className={iconStyle} />}
      />
      <DashboardSidebarMobileMenuLink
        title={user?.name || "Your profile"}
        link="/profile"
        Icon={
          <UserAvatar
            user={user}
            options={{ lazyLoading: true }}
            className={iconStyle}
          />
        }
      />
    </div>
  );
}
