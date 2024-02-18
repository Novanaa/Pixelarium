import { useEffect } from "react";

/**
 * Toggles the page scroll overflow based on the value of isOpen.
 * If isOpen is true, sets the body overflow to "hidden" to prevent scrolling.
 * If isOpen is false, sets the body overflow to "auto" to allow scrolling.
 *
 * @param {boolean} isOpen - Indicates whether the page scroll overflow should be toggled.
 * @returns {void}
 */
export default function useTogglePageScrollOverflow(isOpen: boolean): void {
  // @ts-expect-error miss types
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);
}
