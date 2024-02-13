import ReactNodeChild from "@/components/interfaces/types/ReactNodeChild";
import DevelopersDocsSidebar from "@/components/modules/DevelopersDocsSidebar";
import DevelopersDocsSidebarMobile from "@/components/modules/DevelopersDocsSidebar/DevelopersDocsSidebarMobile";
import Next from "@/components/modules/DevelopersDocsContents/Next";
import Search from "@/components/modules/DevelopersDocsSidebar/Search";
import TableOfContents from "@/components/modules/toc";
import React from "react";
import FrontMatter from "@/interfaces/types/FrontMatter";
import type TocElementData from "@/interfaces/types/Toc";
import Navbar from "@/components/modules/Navbar";

interface DevelopersDocsLayoutProps extends ReactNodeChild {
  frontMatter: FrontMatter;
  toc: Array<TocElementData>;
}

export default function DevelopersDocsLayout({
  children,
  frontMatter,
  toc,
}: DevelopersDocsLayoutProps): React.ReactElement {
  return (
    <>
      <Navbar />
      <Search />
      <DevelopersDocsSidebarMobile />
      <main className="relative top-[3.9rem] flex h-full w-full flex-col px-6 2xl:container lg:flex-row lg:px-8 2xl:px-16">
        <div className="relative">
          <DevelopersDocsSidebar />
        </div>
        <section className="relative -mt-[2rem] w-full md:-mt-[3rem] lg:left-[16rem] lg:-mt-[5rem] lg:w-[60%] xl:left-[14.5rem] xl:w-[65%] 2xl:left-[12rem] 2xl:w-[80%]">
          {children}
          <Next title={frontMatter.next.title} link={frontMatter.next.link} />
          <TableOfContents toc={toc} />
        </section>
      </main>
    </>
  );
}
