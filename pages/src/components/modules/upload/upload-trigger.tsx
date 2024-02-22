"use client";

import React from "react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function UploadTrigger(): React.ReactElement {
  return (
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="picture">Picture</TabsTrigger>
      <TabsTrigger value="link">Link</TabsTrigger>
    </TabsList>
  );
}
