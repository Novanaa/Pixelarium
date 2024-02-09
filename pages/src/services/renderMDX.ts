import { unified } from "unified";
import matter from "gray-matter";
import fs from "fs";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { VFile } from "vfile";
import type FrontMatter from "@/interfaces/types/FrontMatter";
import { visit } from "unist-util-visit";
import type TocElementData from "@/interfaces/types/Toc";
// @ts-expect-error Module doesn't support ts
import addClasses from "rehype-add-classes";

export interface RenderMDXReturnType {
  loadMDXContent: string;
  frontMatter: FrontMatter;
  toc: Array<TocElementData>;
}

export default async function renderMDX(
  path: string,
): Promise<RenderMDXReturnType> {
  const mdxContent: string = fs.readFileSync(path, "utf-8");

  const { data: frontMatter, content }: matter.GrayMatterFile<string> =
    matter(mdxContent);

  const toc: Array<TocElementData> = [];
  const loadMdxContent: VFile = await unified()
    // @ts-expect-error missing types
    .data("settings", { fragment: true })
    .use(remarkHtml)
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "slack-dark",
      keepBackground: false,
    })
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(remarkGfm)
    .use(rehypeAutolinkHeadings)
    .use(() => {
      return (tree) => {
        visit(tree, "element", (node: TocElementData) => {
          if (node.tagName == "h2") toc.push(node);
        });
      };
    })
    .use(addClasses, {
      a: "anchor",
      'h1, h2': "heading"
    })
    .process(content);

  return {
    frontMatter: frontMatter as FrontMatter,
    loadMDXContent: String(loadMdxContent.value),
    toc,
  };
}
