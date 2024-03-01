"use client";

import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import ActionState from "../interfaces/types/ActionsState";
import deletePictureHandler from "../services/delete-picture";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

interface DeletePictureProps extends React.ComponentProps<"div"> {
  uniquekey: string;
  state: boolean;
  setterState: React.Dispatch<React.SetStateAction<ActionState>>;
}

export default function DeletePicture({
  uniquekey,
  state,
  setterState,
}: DeletePictureProps): React.ReactElement {
  return (
    <AlertDialog
      open={state || undefined}
      onOpenChange={(state: boolean) =>
        setterState((prev) => ({ ...prev, delete: state }))
      }
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            picture and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <DeleteDialogAction uniquekey={uniquekey} />
      </AlertDialogContent>
    </AlertDialog>
  );
}

interface DeleteDialogActionProps {
  uniquekey: string;
}

function DeleteDialogAction({
  uniquekey,
}: DeleteDialogActionProps): React.ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router: AppRouterInstance = useRouter();

  return (
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      {isLoading ? (
        <Button variant="default" disabled>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </Button>
      ) : (
        <Button
          onClick={() =>
            deletePictureHandler({ uniquekey, setIsLoading, router })
          }
          disabled={isLoading}
        >
          Continue
        </Button>
      )}
    </AlertDialogFooter>
  );
}
