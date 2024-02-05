import React from "react";
import renderMDX from "@/services/renderMDX";
import type { RenderMDXReturnType } from "@/services/renderMDX";
import MDX from "@/components/modules/MDX";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pixelarium - Terms of Service",
  description: "Pixelarium Terms of Service",
};

async function TermOfServices() {
  const { loadMDXContent }: Awaited<RenderMDXReturnType> = await renderMDX(
    "./src/app/tos/index.mdx",
  );

  return <MDX mdxContent={loadMDXContent} />;
}

export default TermOfServices;
