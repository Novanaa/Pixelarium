"use client";

import { ToastActionElement } from "@/components/ui/toast";
import { ToastAction } from "@/components/ui/toast";

interface ErrorToastAction {
  title: string;
  altText: string;
}

export default function ErrorToastAction({
  title,
  altText,
}: Partial<ErrorToastAction>): ToastActionElement {
  return (
    <ToastAction altText={altText || "Goto schedule to undo"}>
      {title || "Undo"}
    </ToastAction>
  );
}
