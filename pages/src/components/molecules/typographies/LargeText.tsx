import ReactNodeChild from "@/components/interfaces/types/ReactNodeChild";
import React from "react";

/**
 * Renders a div element with large text and bold font.
 *
 * @param {ReactNodeChild} props - The props object containing the children to be rendered.
 * @param {React.ReactNode} props.children - The content to be rendered inside the div element.
 * @returns {React.ReactNode} The rendered div element with large text and bold font.
 */
function LargeText({ children }: ReactNodeChild): React.ReactNode {
  return <div className="text-lg font-semibold">{children}</div>;
}

export default LargeText;
