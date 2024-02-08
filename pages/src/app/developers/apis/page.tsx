import DevelopersDocsSidebar from "@/components/modules/DevelopersDocsSidebar";
import DevelopersDocsSidebarMobile from "@/components/modules/DevelopersDocsSidebar/DevelopersDocsSidebarMobile";
import Search from "@/components/modules/DevelopersDocsSidebar/Search";
import React from "react";

export default function DevelopersAPISDocs(): React.ReactElement {
  return (
    <>
      <Search />
      <DevelopersDocsSidebarMobile />
      <main className="relative top-[3.9rem] flex h-full w-full flex-col px-6 @container lg:flex-row lg:px-8 2xl:px-16">
        <DevelopersDocsSidebar />
      </main>
    </>
  );
}
