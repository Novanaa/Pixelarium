"use client";

import UserProfilePictureProps from "@/components/interfaces/types/UserProfilePictureProps";
import { Skeleton } from "@/components/ui/skeleton";
import DecodedUser from "@/interfaces/types/DecodedUser";
import getUserData from "@/services/getUserData";
import React, { use, useState } from "react";
import PictureProfileSidebar from "./PictureProfileSidebar";

const userQuery = getUserData();
function UserProfilePicture({ isLoading }: UserProfilePictureProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const user = use<DecodedUser | null>(userQuery);

  return (
    <>
      <section>
        {!isLoading ? (
          <picture onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
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
      </section>
      {isSidebarOpen ? (
        <PictureProfileSidebar
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
          user={user}
          isLoading={isLoading}
        />
      ) : null}
    </>
  );
}

export default UserProfilePicture;
