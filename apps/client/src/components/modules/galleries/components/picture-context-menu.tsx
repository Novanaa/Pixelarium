import React from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  DownloadIcon,
  EyeOpenIcon,
  HeartFilledIcon,
  TokensIcon,
  TrashIcon,
} from "@radix-ui/react-icons";

export default function PictureContextMenu({
  children,
}: React.ComponentProps<"section">): React.ReactElement {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem>
          <EyeOpenIcon className="mr-2 h-4 w-4" />
          View
        </ContextMenuItem>
        <ContextMenuItem>
          <TokensIcon className="mr-2 h-4 w-4" />
          Edit
        </ContextMenuItem>
        <ContextMenuItem>
          <HeartFilledIcon className="mr-2 h-4 w-4" />
          Add to favorites
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <DownloadIcon className="mr-2 h-4 w-4" />
          Download
        </ContextMenuItem>
        <ContextMenuItem className="text-destructive hover:text-destructive focus:text-destructive">
          <TrashIcon className="mr-2 h-4 w-4" />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
