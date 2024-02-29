import React, { useEffect } from "react";
import { useQueryState } from "nuqs";

interface useQueryParamsStateProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  expectedValue: string;
  paramsName: string;
}

/**
 * Custom hook that updates the state of 'isOpen' based on the value of the 'active' search parameter.
 *
 * @param {Object} props - The props object.
 * @param {boolean} props.isOpen - The current state of 'isOpen'.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.setIsOpen - The state setter function for 'isOpen'.
 *
 * @returns {void}
 */
export default function useQueryParamsState({
  isOpen,
  setIsOpen,
  expectedValue,
  paramsName,
}: useQueryParamsStateProps): void {
  const [activeSearchParams] = useQueryState(paramsName);

  useEffect(() => {
    if (!activeSearchParams || activeSearchParams !== expectedValue) {
      setIsOpen(false);
      return;
    }

    setIsOpen(true);
    return;
  }, [setIsOpen, activeSearchParams, isOpen, expectedValue]);
}
