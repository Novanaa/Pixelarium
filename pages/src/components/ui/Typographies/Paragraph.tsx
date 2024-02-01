import React from "react";
import type ReactNodeChild from "@/components/interfaces/types/ReactNodeChild";
import cn from "@/utils/cn";

interface ReactNodeChildWithClassName extends ReactNodeChild {
  className?: string;
}

/**
 * Renders a paragraph element with custom styling.
 *
 * @param {ReactNodeChildWithClassName} props - The props object containing the children to be rendered.
 * @param {React.ReactNode} props.children - The content to be rendered inside the paragraph element.
 * @returns {React.ReactNode} The rendered paragraph element.
 */
function Paragraph({
  children,
  className,
}: ReactNodeChildWithClassName): React.ReactNode {
  return <p className={cn("leading-7", className)}>{children}</p>;
}

export default Paragraph;
