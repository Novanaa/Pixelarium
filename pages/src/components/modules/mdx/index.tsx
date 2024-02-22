import React from "react";
import sanitizeHtml from "sanitize-html";
import type MDXProps from "@/components/interfaces/types/MDXProps";
import { cn } from "@/lib/utils";
import { firaCode, jakartaSans } from "@/configs/fonts";
import sanitizeOptionsConfiguration from "@/configs/sanitizeHtmlOptions";
import Container from "@/components/molecules/container";

function MDX({ mdxContent, className }: MDXProps): React.ReactElement {
  return (
    <main className="@container">
      <Container className="flex h-full w-full items-center justify-center py-[6rem] @md:py-[8rem]">
        <article
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(mdxContent, sanitizeOptionsConfiguration),
          }}
          className={cn(
            `prose prose-sm prose-slate w-full opacity-85 @3xl:prose-base dark:prose-invert prose-a:cursor-pointer prose-a:font-bold prose-a:underline-offset-4 prose-code:font-medium prose-code:text-primary prose-pre:rounded-lg prose-pre:border prose-pre:bg-primary-foreground prose-pre:p-5 prose-thead:border-border prose-tr:border-border prose-hr:border-border ${jakartaSans.className} font-sans font-medium text-primary prose-code:text-base`,
            `prose-code:${firaCode.variable}`,
            `prose-pre:${firaCode.variable}`,
            `prose-figure:${firaCode.variable}`,
            className,
          )}
        ></article>
      </Container>
    </main>
  );
}

export default MDX;
