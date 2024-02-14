import UserAvatar from "@/components/ui/UserAvatar";
import DecodedUser from "@/interfaces/types/DecodedUser";
import getServerSideUserData from "@/services/getServerSideUserData";
import { CameraIcon, HeartFilledIcon, RocketIcon } from "@radix-ui/react-icons";
import React from "react";
import { HiHome, HiSparkles } from "react-icons/hi";
import DashboardSidebarMenuLink from "./DashboardSidebarMenuLink";
import DashboardSidebarMenuLinksMoreOptions from "./DashboardSidebarMenuLinksMoreOptions";

export default async function DashboardSidebarMenuLinksList(): Promise<React.ReactElement> {
  const user: Awaited<DecodedUser | null> = await getServerSideUserData();

  const iconStyle: string = "mr-3 h-7 w-7";

  return (
    <div className="relative top-5 flex flex-col gap-[0.6rem] opacity-90">
      <DashboardSidebarMenuLink
        title="Home"
        link="/"
        Icon={<HiHome className={iconStyle} />}
      />
      <DashboardSidebarMenuLink
        title="Gallery"
        link="/profile/user?tabActive=gallery"
        Icon={<HiSparkles className={iconStyle} />}
      />
      <DashboardSidebarMenuLink
        title="Albums"
        link="/profile/user?tabActive=albums"
        Icon={<CameraIcon className={iconStyle} />}
      />
      <DashboardSidebarMenuLink
        title="Upload"
        link="/profile/user?active=upload"
        Icon={<RocketIcon className={iconStyle} />}
      />
      <DashboardSidebarMenuLink
        title="Upgrade"
        link="/pricing"
        Icon={<HeartFilledIcon className={iconStyle} />}
      />
      <DashboardSidebarMenuLink
        title="Your Profile"
        link="/profile"
        Icon={
          <UserAvatar
            user={user}
            options={{ lazyLoading: true }}
            className="mr-3 h-7 w-7"
          />
        }
      />
      <DashboardSidebarMenuLinksMoreOptions />
    </div>
  );
}