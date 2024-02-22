"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import TooltipOnHover from "@/components/molecules/TooltipOnHover";
import { Button } from "@/components/ui/button";
import {
  DotsVerticalIcon,
  InfoCircledIcon,
  ReloadIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import deletesPictures from "./services/deletesPictures";
import Picture from "@/components/interfaces/types/Picture";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useToast } from "@/components/ui/use-toast";
import UseToastProps from "@/components/interfaces/types/UseToastProps";

interface HeaderMoreOptionsProps {
  pictures: Array<Picture> | undefined;
}

export default function HeaderMoreOptions({
  pictures,
}: HeaderMoreOptionsProps): React.ReactElement {
  return (
    <Popover>
      <PopoverTrigger>
        <TooltipOnHover title="Options">
          <Button variant="ghost" size="icon">
            <DotsVerticalIcon className="h-5 w-5" />
          </Button>
        </TooltipOnHover>
      </PopoverTrigger>
      <PopoverContent className="mr-6 mt-2 w-64">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Need More?</h4>
          </div>
          <div className="grid w-full gap-1">
            <Link
              href="/galleries?active=info"
              className={cn(
                navigationMenuTriggerStyle(),
                "flex h-9 w-full cursor-pointer items-center justify-start gap-1 px-[0.3rem] text-[0.9rem] font-medium opacity-80",
              )}
            >
              <InfoCircledIcon className="h-[1.1rem] w-[1.1rem]" />
              Gallery Info
            </Link>
            <div className="h-[0.4rem] w-full border-b"></div>
            <DeletePictures pictures={pictures} />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

interface DeletesPicturesProps {
  pictures: Array<Picture> | undefined;
}

function DeletePictures({
  pictures,
}: DeletesPicturesProps): React.ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router: AppRouterInstance = useRouter();
  const toaster: UseToastProps = useToast();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          disabled={!pictures?.length}
          className={cn(
            "group relative top-[0.2rem] flex h-9 w-full cursor-pointer items-center justify-start gap-1 rounded-md px-[0.3rem] py-2 text-[0.9rem] font-medium text-destructive data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 hover:bg-accent focus:bg-accent focus:opacity-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
          )}
        >
          <TrashIcon className="h-[1.15rem] w-[1.15rem]" />
          Deletes Pictures
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {isLoading ? (
            <Button disabled>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <AlertDialogAction
              onClick={() =>
                deletesPictures({
                  router,
                  onSuccessRedirectLink: "/galleries",
                  toaster,
                  setIsLoading,
                })
              }
            >
              Continue
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
