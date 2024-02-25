"use client";

import React, { useEffect } from "react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import activeUploadTabs from "./constant/readonly/activeUploadTabs";
import { useQueryState, parseAsStringLiteral } from "nuqs";

export default function UploadTrigger(): React.ReactElement {
  const [activeTabs, setActiveTabs] = useQueryState(
    "upload_by",
    parseAsStringLiteral(activeUploadTabs).withDefault("picture"),
  );

  // @ts-expect-error promise error
  useEffect(() => {
    setActiveTabs(activeTabs);

    return () => setActiveTabs(null);
  });

  return (
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="picture" onClick={() => setActiveTabs("picture")}>
        Picture
      </TabsTrigger>
      <TabsTrigger value="link" onClick={() => setActiveTabs("link")}>
        Link
      </TabsTrigger>
    </TabsList>
  );
}
