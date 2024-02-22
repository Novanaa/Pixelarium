import ReactNodeChild from "@/components/interfaces/types/ReactNodeChild";
import cn from "@/utils/cn";
import React from "react";

interface ReactNodeChildWithClassName extends ReactNodeChild {
  className?: string;
}

/**
 * Renders a muted text component.
 *
 * @param {ReactNodeChildWithClassName} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the component.
 * @returns {React.ReactNode} - The rendered muted text component.
 */
function MutedText({
  children,
  className,
}: ReactNodeChildWithClassName): React.ReactNode {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  );
}

export default MutedText;
