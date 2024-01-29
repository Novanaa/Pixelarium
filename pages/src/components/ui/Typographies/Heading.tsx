import React from "react";
import type ReactNodeChild from "@/components/interfaces/types/ReactNodeChild";
import { cn } from "@/lib/utils";

interface ReactNodeChildWithClassName extends ReactNodeChild {
  className?: string;
}

/**
 * Renders a heading element with the provided children.
 *
 * @param {ReactNodeChildWithClassName} props - The props object containing the children.
 * @returns {React.ReactNode} - The rendered heading element.
 */
export function HeadingOne({
  children,
  className,
}: ReactNodeChildWithClassName): React.ReactNode {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

/**
 * Renders a heading two element with the provided children.
 *
 * @param {ReactNodeChildWithClassName} props - The props object containing the children.
 * @returns {React.ReactNode} - The rendered heading two element.
 */
export function HeadingTwo({
  children,
  className,
}: ReactNodeChildWithClassName): React.ReactNode {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}

/**
 * Renders a heading three element with the provided children.
 *
 * @param {ReactNodeChildWithClassName} props - The props object containing the children.
 * @returns {React.ReactNode} - The rendered heading three element.
 */
export function HeadingThree({
  children,
  className,
}: ReactNodeChildWithClassName): React.ReactNode {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}

/**
 * Renders a heading with level four.
 *
 * @param {ReactNodeChildWithClassName} props - The component props.
 * @param {React.ReactNode} props.children - The content to be displayed inside the heading.
 * @returns {React.ReactNode} The rendered heading element.
 */
export function HeadingFour({
  children,
  className,
}: ReactNodeChildWithClassName): React.ReactNode {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}
