import React from "react";
import renderMDX from "@/services/renderMDX";
import type { RenderMDXReturnType } from "@/services/renderMDX";
import MDX from "@/components/modules/MDX";
import { Metadata } from "next";
import RootLayout from "@/layouts/Layout";

export const metadata: Metadata = {
  title: "Pixelarium - Terms of Service",
  description: "Pixelarium Terms of Service",
};

async function TermOfServices() {
  const { loadMDXContent }: Awaited<RenderMDXReturnType> = await renderMDX(
    "./src/app/tos/index.mdx",
  );

  return (
    <RootLayout>
      <MDX mdxContent={loadMDXContent} className="prose-h1:text-center" />
    </RootLayout>
  );
}

export default TermOfServices;
