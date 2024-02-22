import ReactNodeChild from "@/components/interfaces/types/ReactNodeChild";
import React from "react";

/**
 * Renders an inline code element.
 *
 * @param {ReactNodeChild} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the code element.
 * @returns {React.ReactNode} - The rendered inline code element.
 */
function InlineCode({ children }: ReactNodeChild): React.ReactNode {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
}

export default InlineCode;
