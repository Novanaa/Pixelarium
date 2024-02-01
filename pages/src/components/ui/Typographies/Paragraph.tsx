import React from "react";
import type ReactNodeChild from "@/components/interfaces/types/ReactNodeChild";

/**
 * Renders a paragraph element with custom styling.
 *
 * @param {ReactNodeChild} props - The props object containing the children to be rendered.
 * @param {React.ReactNode} props.children - The content to be rendered inside the paragraph element.
 * @returns {React.ReactNode} The rendered paragraph element.
 */
function Paragraph({ children }: ReactNodeChild): React.ReactNode {
  return <p className="leading-7">{children}</p>;
}

export default Paragraph;
