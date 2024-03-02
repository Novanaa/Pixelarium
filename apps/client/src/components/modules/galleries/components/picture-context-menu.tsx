"use client";

import React, { useState } from "react";
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
import Picture from "@/components/interfaces/types/Picture";
import DeletePicture from "../actions/delete-picture";
import ActionState from "../interfaces/types/ActionsState";
import downloadPicture from "../services/download-picture";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import EditPicture from "../actions/edit-picture";

interface PictureContextMenuProps extends React.ComponentProps<"section"> {
  picture: Picture;
}

export default function PictureContextMenu({
  children,
  picture,
}: PictureContextMenuProps): React.ReactElement {
  const router: AppRouterInstance = useRouter();
  const [dialogOpenState, setDialogOpenState] = useState<ActionState>({
    delete: false,
    edit: false,
  });

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
        <ContextMenuContent className="w-56">
          <ContextMenuItem>
            <EyeOpenIcon className="mr-2 h-4 w-4" />
            View
          </ContextMenuItem>
          <ContextMenuItem
            onClick={() =>
              setDialogOpenState((prev) => ({ ...prev, edit: !prev.edit }))
            }
          >
            <TokensIcon className="mr-2 h-4 w-4" />
            Edit
          </ContextMenuItem>
          <ContextMenuItem>
            <HeartFilledIcon className="mr-2 h-4 w-4" />
            Add to favorites
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem
            onClick={() =>
              downloadPicture({ uniquekey: picture.uniquekey, router })
            }
          >
            <DownloadIcon className="mr-2 h-4 w-4" />
            Download (Beta)
          </ContextMenuItem>
          <ContextMenuItem
            className="text-destructive hover:text-destructive focus:text-destructive"
            onClick={() =>
              setDialogOpenState((prev) => ({ ...prev, delete: !prev.delete }))
            }
          >
            <TrashIcon className="mr-2 h-4 w-4" />
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <DeletePicture
        uniquekey={picture.uniquekey}
        state={dialogOpenState.delete}
        setterState={setDialogOpenState}
      />
      <EditPicture
      picture={picture}
        uniquekey={picture.uniquekey}
        state={dialogOpenState.edit}
        setterState={setDialogOpenState}
      />
    </>
  );
}
