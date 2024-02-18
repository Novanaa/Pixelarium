import { ReadonlyURLSearchParams } from "next/navigation";
import React, { useEffect } from "react";

interface UseActiveSearchParamsProps {
  searchParams: ReadonlyURLSearchParams;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

/**
 * Custom hook that updates the state of 'isOpen' based on the value of the 'active' search parameter.
 *
 * @param {Object} props - The props object.
 * @param {boolean} props.isOpen - The current state of 'isOpen'.
 * @param {ReadonlyURLSearchParams} props.searchParams - The search parameters object.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.setIsOpen - The state setter function for 'isOpen'.
 *
 * @returns {void}
 */
export default function useActiveSearchParams({
  isOpen,
  searchParams,
  setIsOpen,
}: UseActiveSearchParamsProps): void {
  useEffect(() => {
    const activeSearchParams: string | null = searchParams.get("active");
    if (!activeSearchParams || activeSearchParams !== "search") {
      setIsOpen(false);
      return;
    }

    setIsOpen(true);

    return () => setIsOpen(isOpen);
  }, [setIsOpen, searchParams, isOpen]);
}
