import React from "react";
import DashboardSidebar from "@/components/modules/DashboardSidebar";
import DashboardSidebarMobile from "@/components/modules/DashboardSidebar/Mobile";

interface DashboardLayoutProps extends React.ComponentProps<"main"> {}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps): React.ReactElement {
  return (
    <main className="flex flex-col items-start sm:flex-row">
      <DashboardSidebar />
      <DashboardSidebarMobile />
      <section className="container relative h-full w-full sm:px-0">
        {children}
      </section>
    </main>
  );
}
