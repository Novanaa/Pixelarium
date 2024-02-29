import React from "react";
import DashboardSidebar from "@/components/modules/dashboard-sidebar";
import DashboardSidebarMobile from "@/components/modules/dashboard-sidebar/mobile";
import Footer from "@/components/modules/footer";
import Navbar from "@/components/modules/navbar";

interface DashboardLayoutProps extends React.ComponentProps<"main"> {}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps): React.ReactElement {
  return (
    <main>
      <div className="block sm:hidden">
        <Navbar />
      </div>
      <section className="flex flex-col items-start sm:flex-row">
        <DashboardSidebar />
        <DashboardSidebarMobile />
        <div className="container relative h-full sm:px-0">{children}</div>
      </section>
      <div className="hidden sm:block">
        <Footer />
      </div>
    </main>
  );
}
