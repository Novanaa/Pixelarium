import ReactNodeChild from "@/components/interfaces/types/ReactNodeChild";
import DevelopersDocsSidebar from "@/components/modules/developers/sidebar";
import DevelopersDocsSidebarMobile from "@/components/modules/developers/sidebar/mobile";
import Next from "@/components/modules/developers/contents/next";
import TableOfContents from "@/components/modules/toc";
import React, { Suspense } from "react";
import FrontMatter from "@/interfaces/types/FrontMatter";
import type TocElementData from "@/interfaces/types/Toc";
import Navbar from "@/components/modules/navbar";
import Search from "@/components/modules/search";
import type SearchDatas from "@/components/interfaces/types/SearchDatas";
import developresDocsNavMenuLinks from "@/resources/developers-docs-navigation-menu-links.json";
import { FileIcon } from "@radix-ui/react-icons";
import GlobalLoading from "@/universal/loading";

interface DevelopersDocsLayoutProps extends ReactNodeChild {
  frontMatter: FrontMatter;
  toc: Array<TocElementData>;
}

export default function DevelopersDocsLayout({
  children,
  frontMatter,
  toc,
}: DevelopersDocsLayoutProps): React.ReactElement {
  const searchDatas: Array<SearchDatas> = developresDocsNavMenuLinks.map(
    (docs) => ({
      heading: docs.title,
      search:
        docs.items.map((doc) => ({
          title: doc.title,
          link: doc.url,
          Icon: <FileIcon className="mr-2 h-5 w-5" />,
        })) || [],
    }),
  );

  return (
    <Suspense fallback={<GlobalLoading />}>
      <Navbar />
      <Search datas={searchDatas} />
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
    </Suspense>
  );
}
