import React from "react";
import DashboardSidebar from "@/components/modules/DashboardSidebar";

interface DashboardLayoutProps extends React.ComponentProps<"main"> {}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps): React.ReactElement {
  return (
    <main className="flex items-start gap-5">
      <DashboardSidebar />
      <section className="relative h-full w-full border">{children}</section>
    </main>
  );
}
