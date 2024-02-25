import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useEffect } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { usePathname } from "next/navigation";

interface UseToggleOuterPageClickProps {
  ref: React.MutableRefObject<HTMLDivElement>;
  router: AppRouterInstance;
}

/**
 * A custom hook that toggles the page when a click event occurs outside a specified element.
 *
 * @param {UseToggleOuterPageClickProps} options - The options for the hook.
 * @param {React.MutableRefObject<HTMLDivElement>} options.ref - The reference to the element that should be checked for outside clicks.
 * @param {AppRouterInstance} options.router - The router instance used for navigating to a new page.
 * @param {string} options.pagePathname - The pathname of the page to navigate to when an outside click occurs.
 *
 * @returns {void}
 */
export default function useToggleOuterPageClick({
  ref,
  router,
}: UseToggleOuterPageClickProps): void {
  const windowWidth: number = useWindowWidth();
  const pagePathname: string = usePathname()
  useEffect(() => {
    if (windowWidth > 640) {
      const handleClick = (e: MouseEvent) => {
        if (!ref.current.contains(e.target as Node)) {
          router.push(pagePathname);
        }
      };

      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }
  }, [windowWidth, pagePathname, ref, router]);
}
