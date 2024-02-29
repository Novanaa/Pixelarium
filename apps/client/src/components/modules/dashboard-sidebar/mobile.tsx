import React from "react";
import { cn } from "@/lib/utils";
import DashboardSidebarMobileMenuLinksList from "./components/mobile/menu-links-list";

export default function DashboardSidebarMobile(): React.ReactElement {
  const bluryBackground: string =
    "bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-[var(--border)]";

  return (
    <section
      className={cn(
        "fixed bottom-0 z-30 w-full border py-[0.7rem] @container sm:hidden",
        bluryBackground,
      )}
    >
      <div className="flex flex-col items-center justify-center">
        <DashboardSidebarMobileMenuLinksList />
      </div>
    </section>
  );
}
