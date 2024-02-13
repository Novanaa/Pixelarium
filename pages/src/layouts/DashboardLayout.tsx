import React from "react";
import DashboardSidebar from "@/components/modules/DashboardSidebar";
import DashboardSidebarMobile from "@/components/modules/DashboardSidebar/Mobile";
import Footer from "@/components/modules/Footer";
import Navbar from "@/components/modules/Navbar";

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
