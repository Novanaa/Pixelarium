import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useEffect } from "react";

interface UseKeyboardToggleProps {
  router: AppRouterInstance;
  pagePathname: string;
}

/**
 * A custom hook that toggles the keyboard behavior based on specific key events.
 *
 * @param {UseKeyboardToggleProps} props - The props object containing the router and page pathname.
 * @param {AppRouterInstance} props.router - The router instance from the Next.js library.
 * @param {string} props.pagePathname - The pathname of the current page.
 * @returns {void}
 */
export default function useKeyboardToggle({
  pagePathname,
  router,
}: UseKeyboardToggleProps): void {
  useEffect(() => {
    const clickHandler = (ev: KeyboardEvent) => {
      if (ev.key == "/") {
        ev.preventDefault();
        router.push(`${pagePathname}?active=search`);
      }
      if (ev.key == "Escape") {
        ev.preventDefault();
        router.push(pagePathname);
      }
    };
    document.addEventListener("keydown", clickHandler);
    return () => document.removeEventListener("keydown", clickHandler);
  });
}
