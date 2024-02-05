"use client";

import UserProfilePictureProps from "@/components/interfaces/types/UserProfilePictureProps";
import { Skeleton } from "@/components/ui/skeleton";
import DecodedUser from "@/interfaces/types/DecodedUser";
import getUserData from "@/services/getUserData";
import Link from "next/link";
import React, { use } from "react";

const userQuery = getUserData();
function UserProfilePicture({ isLoading }: UserProfilePictureProps) {
  const user = use<DecodedUser | null>(userQuery);

  return (
    <Link href={"/profile/" + user?.name}>
      {!isLoading ? (
        <picture>
          <img
            src={user?.picture}
            alt={"@" + user?.name}
            className="h-8 w-8 rounded-full border"
            width={8}
            height={8}
          />
        </picture>
      ) : (
        <Skeleton className="h-8 w-8 rounded-full" />
      )}
    </Link>
  );
}

export default UserProfilePicture;
