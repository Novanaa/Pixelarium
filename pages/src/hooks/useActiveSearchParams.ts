import { ReadonlyURLSearchParams } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

interface UseActiveSearchParamsProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  expectedValue: string;
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
  setIsOpen,
  expectedValue,
}: UseActiveSearchParamsProps): void {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  useEffect(() => {
    const hasActiveQueryParams: boolean = searchParams.has("active");
    const activeSearchParams: string | null = searchParams.get("active");
    if (!hasActiveQueryParams || activeSearchParams !== expectedValue) {
      setIsOpen(false);
      return;
    }

    setIsOpen(true);
    return;
  }, [setIsOpen, searchParams, isOpen, expectedValue]);
}
