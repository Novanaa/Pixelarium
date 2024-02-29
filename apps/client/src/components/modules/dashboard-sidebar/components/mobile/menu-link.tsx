"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import DashboardSidebarMenuLinkProps from "@/components/interfaces/types/DashboardSidebarMenuLinkProps";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function DashboardSidebarMobileMenuLink({
  title,
  link,
  Icon,
}: DashboardSidebarMenuLinkProps): React.ReactElement {
  const menuLinksHoverStyle: string =
    "group inline-flex h-9 w-max items-center justify-center rounded-md px-2 py-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={link} className={cn(menuLinksHoverStyle, "relative")}>
            {Icon}
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
