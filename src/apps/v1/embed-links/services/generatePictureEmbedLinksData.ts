import PictureEmbedLinks from "../interfaces/PictureEmbedLinks";
import HtmlLink from "../interfaces/types/HtmlLink";
import generateHtmlPictureLink, {
  GenerateHtmlPictureLinkOptions,
} from "../utils/generateHtmlPictureLink";
import generateDirectPictureLink from "../utils/generateDirectPictureLink";
import DirectLink from "../interfaces/types/DirectLink";
import generateMarkdownPictureLink from "../utils/generateMarkdownPictureLink";
import MarkdownLink from "../interfaces/types/MarkdownLink";

interface GeneratePictureEmbedLinksOptions
  extends GenerateHtmlPictureLinkOptions {}

type GeneratePictureEmbedLinksParams = {
  title: string;
  url: string;
  directViewLink: string;
  options: GeneratePictureEmbedLinksOptions;
};

/**
 * Generates picture embed links based on the provided parameters.
 *
 * @param {GeneratePictureEmbedLinksParams} params - The parameters for generating the picture embed links.
 * @param {string} params.directViewLink - The direct view link for the picture.
 * @param {string} params.title - The title of the picture.
 * @param {string} params.url - The URL of the picture.
 * @param {GeneratePictureEmbedLinksOptions} params.options - The options for generating the picture embed links.
 * @returns {PictureEmbedLinks} - The generated picture embed links.
 */
export default function generatePictureEmbedLinksData({
  directViewLink,
  title,
  url,
  options,
}: GeneratePictureEmbedLinksParams): PictureEmbedLinks {
  const htmlLink: HtmlLink = generateHtmlPictureLink({ title, url, options });

  const directLink: DirectLink = generateDirectPictureLink({
    url,
    link: directViewLink,
  });

  const markdownLink: MarkdownLink = generateMarkdownPictureLink({
    title,
    url,
  });

  const embedLinks: PictureEmbedLinks = {
    direct_link: directLink,
    html_link: htmlLink,
    markdown_link: markdownLink,
  };

  return embedLinks;
}
