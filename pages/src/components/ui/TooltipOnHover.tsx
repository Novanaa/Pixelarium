"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import dynamic from "next/dynamic";
import React from "react";

interface TooltipOnHoverProps extends React.ComponentProps<"div"> {
  title: string;
}

/**
 * Renders a component that displays a tooltip on hover.
 *
 * @param {object} props - The component props.
 * @param {string} props.className - The class name for the tooltip content.
 * @param {React.ReactNode} props.children - The content to be wrapped with the tooltip.
 * @param {string} props.title - The title of the tooltip.
 * @returns {React.ReactElement} - The rendered tooltip component.
 */
function TooltipOnHover({
  className,
  children,
  title,
}: TooltipOnHoverProps): React.ReactElement {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent className={className}>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default dynamic(() => Promise.resolve(TooltipOnHover), { ssr: false });
