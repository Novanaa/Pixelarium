import React from "react";
import { cn } from "@/lib/utils";
import DashboardSidebarMobileMenuLinksList from "./components/mobile/menu-links-list";

export default function DashboardSidebarMobile(): React.ReactElement {
  return (
    <section
      className={cn(
        "fixed bottom-0 z-30 w-full border bg-background py-[0.7rem] @container sm:hidden",
      )}
    >
      <div className="flex flex-col items-center justify-center">
        <DashboardSidebarMobileMenuLinksList />
      </div>
    </section>
  );
}
