import React from "react";
import type ReactNodeChild from "../interfaces/types/ReactNodeChild";

/**
 * Renders a container component.
 *
 * @param {ReactNodeChild} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to render inside the container.
 * @returns {React.ReactElement} The rendered container component.
 */
function Container({ children }: ReactNodeChild): React.ReactElement {
  return <section className="container">{children}</section>;
}

export default Container;
