import ReactNodeChild from "@/components/interfaces/types/ReactNodeChild";
import DevelopersDocsSidebar from "@/components/modules/DevelopersDocsSidebar";
import DevelopersDocsSidebarMobile from "@/components/modules/DevelopersDocsSidebar/DevelopersDocsSidebarMobile";
import Next from "@/components/modules/DevelopersDocsContents/Next";
import Search from "@/components/modules/DevelopersDocsSidebar/Search";
import React from "react";

interface DevelopersDocsLayoutProps extends ReactNodeChild {
  nextTitle: string;
  nextLink: string;
}

export default function DevelopersDocsLayout({
  children,
  nextLink,
  nextTitle,
}: DevelopersDocsLayoutProps): React.ReactElement {
  return (
    <>
      <Search />
      <DevelopersDocsSidebarMobile />
      <main className="relative top-[3.9rem] flex h-full w-full flex-col px-6 2xl:container lg:flex-row lg:px-8 2xl:px-16">
        <div className="relative">
          <DevelopersDocsSidebar />
        </div>
        <section className="relative -mt-[2rem] w-full md:-mt-[3rem] lg:left-[16rem] lg:-mt-[5rem] lg:w-[65%] xl:left-[14.5rem] 2xl:left-[12rem]">
          {children}
          <Next title={nextTitle} link={nextLink} />
        </section>
      </main>
    </>
  );
}
