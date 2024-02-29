import ReactNodeChild from "@/components/interfaces/types/ReactNodeChild";
import React from "react";

/**
 * Renders a small text component.
 *
 * @param {ReactNodeChild} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the component.
 * @returns {React.ReactNode} The rendered small text component.
 */
function SmallText({ children }: ReactNodeChild): React.ReactNode {
  return <small className="text-sm font-medium leading-none">{children}</small>;
}

export default SmallText;
