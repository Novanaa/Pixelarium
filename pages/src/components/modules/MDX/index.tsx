import React from "react";
import sanitizeHtml from "sanitize-html";
import type MDXProps from "@/components/interfaces/types/MDXProps";
import { cn } from "@/lib/utils";
import { firaCode, jakartaSans } from "@/configs/fonts";

function MDX({ mdxContent }: MDXProps): React.ReactElement {
  return (
    <main className="flex h-full w-full items-center justify-center py-[8rem]">
      <article
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(mdxContent) }}
        className={cn(
          `prose dark:prose-invert prose-hr:border-border prose-tr:border-border prose-thead:border-border prose-code:text-primary prose-code:font-medium prose-pre:bg-primary-foreground prose-pre:rounded-lg prose-pre:p-5 prose-pre:border prose-slate prose-a:font-bold prose-a:underline-offset-4 opacity-85 ${jakartaSans.className} font-sans font-medium text-primary`,
          `prose-code:${firaCode.variable}`,
        )}
      ></article>
    </main>
  );
}

export default MDX;
