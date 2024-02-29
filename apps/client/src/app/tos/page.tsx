import React from "react";
import renderMDX from "@/services/render-mdx";
import type { RenderMDXReturnType } from "@/services/render-mdx";
import MDX from "@/components/modules/mdx";
import { Metadata } from "next";
import RootLayout from "@/layouts";

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
