"use client";

import DashboardSidebarMenuLinkProps from "@/components/interfaces/types/DashboardSidebarMenuLinkProps";
import Paragraph from "@/components/molecules/typographies/paragraph";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function DashboardSidebarMoreOptionsLink({
  link,
  title,
  Icon,
}: DashboardSidebarMenuLinkProps): React.ReactElement {
  const menuLinkListsHoverStyle: string =
    "group inline-flex h-10 w-[95%] items-center rounded-md px-[0.6rem] py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={link}
            className={cn("flex items-center", menuLinkListsHoverStyle)}
          >
            {Icon}
            <Paragraph className="text-[1rem] font-medium">{title}</Paragraph>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
