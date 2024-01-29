import ReactNodeChild from "@/components/interfaces/types/ReactNodeChild";
import React from "react";

/**
 * Renders a muted text component.
 *
 * @param {ReactNodeChild} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the component.
 * @returns {React.ReactNode} - The rendered muted text component.
 */
function MutedText({ children }: ReactNodeChild): React.ReactNode {
  return <p className="text-sm text-muted-foreground">{children}</p>;
}

export default MutedText;
