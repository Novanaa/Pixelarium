import React from "react";
import DashboardSidebarHeader from "./components/desktop/header";
import DashboardSidebarMenuLinksList from "./components/desktop/menu-links-list";

export default function DashboardSidebar(): React.ReactElement {
  return (
    <section className="sticky left-0 top-0 hidden h-[100vh] w-[5rem] rounded border-r pt-10 sm:block lg:w-[18rem]">
      <div className="flex h-full flex-col">
        <div className="pl-5">
          <DashboardSidebarHeader />
        </div>
        <div className="-pl-8 relative h-1 w-full border-b py-[0.7rem]"></div>
        <div className="pl-5">
          <DashboardSidebarMenuLinksList />
        </div>
      </div>
    </section>
  );
}
