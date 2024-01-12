import MarkdownLink from "../interfaces/types/MarkdownLink";

type GenerateMarkdownPictureLinkParams = {
  title: string;
  url: string;
};

/**
 * Generates a markdown picture link.
 *
 * @param {GenerateMarkdownPictureLinkParams} params - The parameters for generating the markdown picture link.
 * @param {string} params.title - The title of the picture.
 * @param {string} params.url - The URL of the picture.
 * @returns {MarkdownLink} The generated markdown picture link.
 */
export default function generateMarkdownPictureLink({
  title,
  url,
}: GenerateMarkdownPictureLinkParams): MarkdownLink {
  const tooltip: string = `![${title}](${url})`;

  const markdownLink: MarkdownLink = {
    tooltip_link: tooltip,
  };

  return markdownLink;
}
