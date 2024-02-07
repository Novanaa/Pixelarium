"use client";

import getLogoSource from "@/utils/getLogoSource";
import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";
import Image from "next/image";
import React from "react";

interface LogoIconsProps extends React.ComponentProps<"img"> {
  width: number;
  height: number;
}

/**
 * Renders the logo icon for the Pixelarium app.
 *
 * @param height - The height of the logo icon.
 * @param width - The width of the logo icon.
 * @param className - The CSS class name for the logo icon.
 * @returns The rendered logo icon as a React element.
 */
export default function LogoIcons({
  height,
  width,
  className,
}: Partial<LogoIconsProps>): React.ReactElement {
  const { theme }: UseThemeProps = useTheme();

  const pixelariumLogoSrc: string = getLogoSource(theme!);
  return (
    <Image
      alt="Pixelarium"
      className={className}
      src={pixelariumLogoSrc}
      width={width || 55}
      height={height || 55}
    />
  );
}
