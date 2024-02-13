"use client";

import DashboardSidebarMenuLinkProps from "@/components/interfaces/types/DashboardSidebarMenuLinkProps";
import Paragraph from "@/components/ui/Typographies/Paragraph";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function DashboardSidebarMenuLink({
  title,
  Icon,
  link,
}: DashboardSidebarMenuLinkProps): React.ReactElement {
  const menuLinksHoverStyle: string =
    "group inline-flex h-12 w-fit pl-[0.6rem] lg:pl-[0rem] right-[0.6rem] relative lg:right-[0rem] lg:w-[90%] items-center rounded-md lg:px-[0.6rem] py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={link}
            className={cn("flex items-center", menuLinksHoverStyle)}
          >
            {Icon}
            <Paragraph className="hidden text-[1.05rem] font-medium lg:block">
              {title}
            </Paragraph>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
