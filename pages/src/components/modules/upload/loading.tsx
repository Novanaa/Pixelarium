import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function UploadPageLoading(): React.ReactElement {
  return (
    <main className="fixed left-0 top-0 z-50 flex h-[100dvh] w-full flex-col items-center justify-center bg-black/60 @container">
      <Skeleton className="h-[100dvh] w-[100vw] rounded-lg border bg-primary-foreground p-1 @md:h-[25rem] @md:w-[25rem]" />
    </main>
  );
}
