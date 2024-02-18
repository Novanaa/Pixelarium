import React from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function MobileSearchLoading(): React.ReactElement {
  return (
    <div className="fixed left-0 top-0 z-30 flex h-[100dvh] w-full items-center justify-center bg-black/50">
      <ReloadIcon className="h-7 w-7 animate-spin" />
    </div>
  );
}
