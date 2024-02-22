import ReactNodeChild from "@/components/interfaces/types/ReactNodeChild";
import React from "react";

/**
 * Renders a lead paragraph with the provided children.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the lead paragraph.
 * @returns {React.ReactNode} - The rendered lead paragraph.
 */
function Lead({ children }: ReactNodeChild): React.ReactNode {
  return <p className="text-xl text-muted-foreground">{children}</p>;
}

export default Lead;
