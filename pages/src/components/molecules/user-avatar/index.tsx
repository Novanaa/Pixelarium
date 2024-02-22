import DecodedUser from "@/interfaces/types/DecodedUser";
import cn from "@/utils/cn";
import React from "react";

interface UserAvatarProps extends React.ComponentProps<"img"> {
  user: DecodedUser | null;
  options?: Partial<UserAvatarPropsOptions>;
}

interface UserAvatarPropsOptions {
  lazyLoading: boolean;
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
  const imageAlt: string = "@".concat(user?.name || "John Doe");
  const defaultUserAvatar: string = "https://i.ibb.co/vC9jN2s/IMG-mths7.jpg";
  const pictureSrc: string = user?.picture || defaultUserAvatar;

  return (
    <>
      <picture>
        <img
          width={15}
          height={15}
          alt={imageAlt}
          src={pictureSrc}
          className={cn("h-10 w-10 rounded-full border", className)}
        />
      </picture>
    </>
  );
}
