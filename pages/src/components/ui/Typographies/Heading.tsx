import React from "react";
import type ReactNodeChild from "@/components/interfaces/types/ReactNodeChild";

/**
 * Renders a heading element with the provided children.
 *
 * @param {ReactNodeChild} props - The props object containing the children.
 * @returns {React.ReactNode} - The rendered heading element.
 */
export function HeadingOne({ children }: ReactNodeChild): React.ReactNode {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}

/**
 * Renders a heading two element with the provided children.
 *
 * @param {ReactNodeChild} props - The props object containing the children.
 * @returns {React.ReactNode} - The rendered heading two element.
 */
export function HeadingTwo({ children }: ReactNodeChild): React.ReactNode {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

/**
 * Renders a heading three element with the provided children.
 *
 * @param {ReactNodeChild} props - The props object containing the children.
 * @returns {React.ReactNode} - The rendered heading three element.
 */
export function HeadingThree({ children }: ReactNodeChild): React.ReactNode {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}

/**
 * Renders a heading with level four.
 *
 * @param {ReactNodeChild} props - The component props.
 * @param {React.ReactNode} props.children - The content to be displayed inside the heading.
 * @returns {React.ReactNode} The rendered heading element.
 */
export function HeadingFour({ children }: ReactNodeChild): React.ReactNode {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}
