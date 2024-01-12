import DirectLink from "./types/DirectLink";
import HtmlLink from "./types/HtmlLink";
import MarkdownLink from "./types/MarkdownLink";

export default interface PictureEmbedLinks {
  html_link: HtmlLink;
  direct_link: DirectLink;
  markdown_link: MarkdownLink;
}
