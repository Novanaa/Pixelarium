import renderMDX, { type RenderMDXReturnType } from "@/services/renderMDX";
import MDX from "@/components/modules/MDX";
import DevelopersDocsLayout from "@/layouts/DevelopersDocsLayout";
import React from "react";
import { Metadata } from "next";

const { loadMDXContent, frontMatter }: Awaited<RenderMDXReturnType> =
  await renderMDX("./src/app/developers/apis/index.mdx");

export const metadata: Metadata = {
  title: `Developers API: ${frontMatter.title}`,
  description: `Pixelarium Developers API Documentation - ${frontMatter.description}`,
};

export default async function DevelopersAPISDocs(): Promise<React.ReactElement> {
  return (
    <>
      <DevelopersDocsLayout
        nextTitle={frontMatter.next.title}
        nextLink={frontMatter.next.link}
      >
        <MDX mdxContent={loadMDXContent} />
      </DevelopersDocsLayout>
    </>
  );
}
