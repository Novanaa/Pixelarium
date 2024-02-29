import React, { Suspense } from "react";
import SearchProps from "@/components/interfaces/types/SearchProps";
import DesktopSearch from "./desktop";
import DesktopSearchLoading from "./desktop/loading";
import MobileSearch from "./mobile";
import MobileSearchLoading from "./mobile/loading";

export default function Search({
  datas,
  emptyItemsMessege,
  placeholder,
}: SearchProps): React.ReactElement {
  emptyItemsMessege = !datas.length
    ? emptyItemsMessege
    : "You doesn't have any data";
  placeholder = placeholder || "Type a command or search...";

  return (
    <main>
      <section className="hidden sm:block">
        <Suspense fallback={<DesktopSearchLoading />}>
          <DesktopSearch
            datas={datas}
            emptyItemsMessege={emptyItemsMessege}
            placeholder={placeholder}
          />
        </Suspense>
      </section>
      <section className="block sm:hidden">
        <Suspense fallback={<MobileSearchLoading />}>
          <MobileSearch
            datas={datas}
            emptyItemsMessege={emptyItemsMessege}
            placeholder={placeholder}
          />
        </Suspense>
      </section>
    </main>
  );
}
