import { useEffect } from "react";

export default function useTogglePagesOverflow(isOpen: boolean): void {
  // @ts-expect-error miss types
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);
}
