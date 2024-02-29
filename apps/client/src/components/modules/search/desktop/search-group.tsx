import SearchGroupProps from "@/components/interfaces/types/SearchGroupProps";
import { CommandGroup, CommandItem } from "@/components/ui/command";
import Link from "next/link";

export default function DesktopSearchGroup({
  datas,
}: SearchGroupProps): Array<React.ReactElement> {
  return datas?.map((data, i) => (
    <CommandGroup heading={data.heading} key={i}>
      {data.search.map((d, i) => (
        <Link href={d.link} key={i}>
          <CommandItem>
            {d.Icon}
            <span>{d.title}</span>
          </CommandItem>
        </Link>
      ))}
    </CommandGroup>
  ));
}
