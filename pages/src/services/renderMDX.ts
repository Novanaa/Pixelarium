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

export interface RenderMDXReturnType {
  loadMDXContent: string;
  frontMatter: unknown;
}

export default async function renderMDX(
  path: string,
): Promise<RenderMDXReturnType> {
  const mdxContent: string = fs.readFileSync(path, "utf-8");

  const { data: frontMatter, content }: matter.GrayMatterFile<string> =
    matter(mdxContent);

  const loadMdxContent: VFile = await unified()
    // @ts-expect-error missing types
    .data("settings", { fragment: true })
    .use(remarkHtml)
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "dark-plus",
      keepBackground: false,
    })
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(remarkGfm)
    .use(rehypeAutolinkHeadings)
    .process(content);

  return { frontMatter, loadMDXContent: String(loadMdxContent.value) };
}
