import SearchGroupProps from "@/components/interfaces/types/SearchGroupProps";
import { CommandItem } from "@/components/ui/command";
import Link from "next/link";

export default function DesktopSearchGroup({
  datas,
}: SearchGroupProps): Array<React.ReactElement> {
  return datas?.map((d, i) => (
    <Link href={d.link} key={i}>
      <CommandItem>
        {d.Icon}
        <span>{d.title}</span>
      </CommandItem>
    </Link>
  ));
}
