import React from "react";
import DashboardSidebar from "@/components/modules/DashboardSidebar";
import DashboardSidebarMobile from "@/components/modules/DashboardSidebar/Mobile";

interface DashboardLayoutProps extends React.ComponentProps<"main"> {}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps): React.ReactElement {
  return (
    <main className="flex items-start flex-col sm:flex-row gap-5">
      <DashboardSidebar />
      <DashboardSidebarMobile />
      <section className="relative h-full w-full border">{children}</section>
    </main>
  );
}
