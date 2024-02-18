import {
  CommandGroup,
  CommandItem,
  CommandShortcut,
} from "@/components/ui/command";
import { GearIcon, PersonIcon, RocketIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export default function AccountsSearchGroup(): React.ReactElement {
  return (
    <CommandGroup heading="Accounts">
      <Link href="/profile">
        <CommandItem>
          <PersonIcon className="mr-2 h-4 w-4" />
          <span>Profile</span>
          <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
      </Link>
      <Link href="/">
        <CommandItem>
          <RocketIcon className="mr-2 h-4 w-4" />
          <span>Upload</span>
          <CommandShortcut>⌘B</CommandShortcut>
        </CommandItem>
      </Link>
      <Link href="/accounts/settings">
        <CommandItem>
          <GearIcon className="mr-2 h-4 w-4" />
          <span>Settings</span>
          <CommandShortcut>⌘S</CommandShortcut>
        </CommandItem>
      </Link>
    </CommandGroup>
  );
}
