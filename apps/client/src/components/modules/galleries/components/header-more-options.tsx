"use client";

import React, { useState } from "react";
import TooltipOnHover from "@/components/molecules/tooltip-on-hover";
import { Button } from "@/components/ui/button";
import { DotsVerticalIcon, ReloadIcon } from "@radix-ui/react-icons";
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
import deletesPictures from "../services/deletes-pictures";
import Picture from "@/components/interfaces/types/Picture";
import { usePathname, useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useToast } from "@/components/ui/use-toast";
import UseToastProps from "@/components/interfaces/types/UseToastProps";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useQueryState, parseAsStringLiteral } from "nuqs";
import activeQueryParamsName from "@/constant/readonly/active-query-params-name";
import sortBy from "@/constant/readonly/sort-by";

interface HeaderMoreOptionsProps {
  pictures: Array<Picture> | undefined;
}

export default function HeaderMoreOptions({
  pictures,
}: HeaderMoreOptionsProps): React.ReactElement {
  const [activeQueryParams] = useQueryState(
    "active",
    parseAsStringLiteral(activeQueryParamsName),
  );

  return (
    <DropdownMenu open={activeQueryParams == "deletes" || undefined}>
      <TooltipOnHover title="Options">
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <DotsVerticalIcon className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
      </TooltipOnHover>
      <DropdownMenuContent className="mr-12 w-56">
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <SortGalleriesPictures />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DeletePictures pictures={pictures} />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

interface DeletesPicturesProps {
  pictures: Array<Picture> | undefined;
}

function DeletePictures({
  pictures,
}: DeletesPicturesProps): React.ReactElement {
  const [_, setActiveQueryParams] = useQueryState(
    "active",
    parseAsStringLiteral(activeQueryParamsName),
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router: AppRouterInstance = useRouter();
  const pathname: string = usePathname();
  const toaster: UseToastProps = useToast();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <DropdownMenuItem
          disabled={!pictures?.length}
          className="cursor-pointer text-destructive focus:text-destructive"
          onClick={() => setActiveQueryParams("deletes")}
        >
          Deletes pictures
        </DropdownMenuItem>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently deletes your
            pictures and remove your pictures from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => router.push(pathname)}>
            Cancel
          </AlertDialogCancel>
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
                  onSuccessRedirectLink: pathname,
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

function SortGalleriesPictures(): React.ReactElement {
  const [_, setSortPicture] = useQueryState(
    "sort_by",
    parseAsStringLiteral(sortBy),
  );

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>Sort by</DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setSortPicture("alpha")}
          >
            A-Z
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setSortPicture("oldest")}
          >
            Oldest
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setSortPicture("recent")}
          >
            Most recent
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
}
