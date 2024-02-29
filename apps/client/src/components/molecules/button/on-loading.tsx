import { Button } from "@/components/ui/button";
import React from "react";
import { ButtonProps } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

interface OnLoadingButtonProps
  extends React.ComponentProps<"button">,
    ButtonProps {
  onLoading: boolean;
  onLoadingMessege?: string;
}

export default function OnLoadingButton({
  children,
  disabled,
  size,
  variant,
  onLoading,
  className,
  onLoadingMessege,
  type,
}: OnLoadingButtonProps): React.ReactElement {
  return (
    <Button
      disabled={disabled || onLoading}
      size={size}
      variant={variant}
      type={type}
      className={cn("font-medium disabled:cursor-wait", className)}
    >
      {onLoading ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          {onLoadingMessege || "Please wait.."}
        </>
      ) : (
        children
      )}
    </Button>
  );
}
