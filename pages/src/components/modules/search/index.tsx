import React, { Suspense } from "react";
import SearchProps from "@/components/interfaces/types/SearchProps";
import DesktopSearch from "./desktop";
import DesktopSearchLoading from "./desktop/Loading";

export default function Search({
  datas,
  heading,
  emptyItemsMessege,
  placeholder,
}: SearchProps): React.ReactElement {
  emptyItemsMessege = !datas.length ? emptyItemsMessege : "No results found.";
  placeholder = placeholder || "Type a command or search...";
  return (
    <main>
      <section className="hidden sm:block">
        <Suspense fallback={<DesktopSearchLoading />}>
          <DesktopSearch
            datas={datas}
            heading={heading}
            emptyItemsMessege={emptyItemsMessege}
            placeholder={placeholder}
          />
        </Suspense>
      </section>
    </main>
  );
}
