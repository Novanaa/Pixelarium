import React from "react";
import type ReactNodeChild from "../interfaces/types/ReactNodeChild";
import { cn } from "@/lib/utils";

interface ReactNodeChildWithClassName extends ReactNodeChild {
  className?: string;
}

/**
 * Renders a container component.
 *
 * @param {ReactNodeChild} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to render inside the container.
 * @returns {React.ReactElement} The rendered container component.
 */
function Container({
  children,
  className,
}: ReactNodeChildWithClassName): React.ReactElement {
  return <section className={cn("container", className)}>{children}</section>;
}

export default Container;
