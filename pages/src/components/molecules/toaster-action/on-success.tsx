"use client";

import { ToastActionElement } from "@/components/ui/toast";
import { ToastAction } from "@/components/ui/toast";

interface SuccessToastAction {
  title?: string;
  altText?: string;
}

export default function SuccessToastAction({
  title,
  altText,
}: SuccessToastAction): ToastActionElement {
  return (
    <ToastAction altText={altText || "Are you ready for the next step??"}>
      {title || "That's great!"}
    </ToastAction>
  );
}
