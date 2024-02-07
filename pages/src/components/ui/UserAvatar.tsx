"use client";

import DecodedUser from "@/interfaces/types/DecodedUser";
import cn from "@/utils/cn";
import React from "react";

interface UserAvatarProps extends React.ComponentProps<"img"> {
  user: DecodedUser | null;
}

/**
 * Renders a user avatar component.
 *
 * @param {UserAvatarProps} props - The component props.
 * @param {DecodedUser | null} props.user - The user object.
 * @param {string} props.className - The additional CSS class name.
 * @returns {React.ReactElement} The rendered user avatar component.
 */
export default function UserAvatar({
  user,
  className,
}: UserAvatarProps): React.ReactElement {
  return (
    <picture>
      <img
        width={15}
        height={15}
        alt={`@${user?.name}`}
        src={user?.picture}
        className={cn("h-10 w-10 rounded-full border", className)}
      />
    </picture>
  );
}
