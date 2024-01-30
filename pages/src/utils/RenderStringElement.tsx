import React from "react";

type RenderStringElementParams = {
  element: string;
};

/**
 * Renders a string element as a div with inner HTML.
 *
 * @param element - The string element to render.
 * @returns A React element representing the string element.
 */
function RenderStringElement({ element }: RenderStringElementParams) {
  return <div dangerouslySetInnerHTML={{ __html: element }} />;
}

export default RenderStringElement;
