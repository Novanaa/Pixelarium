import { IOptions } from "sanitize-html";

const sanitizeOptionsConfiguration: IOptions = {
  allowedAttributes: {
    h1: ["id", "class"],
    h2: ["id", "class"],
    a: ["class", "href"],
    code: ["class", "style", "data-language", "data-theme"],
    pre: ["class", "style", "tabindex", "data-language", "data-theme"],
    span: ["style", "class", "data-theme", "data-line"],
    figure: ["data-rehype-pretty-code-figure", "data-language", "data-theme"],
  },
};

export default sanitizeOptionsConfiguration;
