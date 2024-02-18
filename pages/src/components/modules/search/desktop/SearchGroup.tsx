import SearchDatas from "@/components/interfaces/types/SearchDatas";
import { CommandItem } from "@/components/ui/command";
import Link from "next/link";

interface SearchGroup {
  datas: Array<SearchDatas>;
}

export default function SearchGroup({
  datas,
}: SearchGroup): Array<React.ReactElement> {
  return datas?.map((d, i) => (
    <Link href={d.link} key={i}>
      <CommandItem>
        {d.Icon}
        <span>{d.title}</span>
      </CommandItem>
    </Link>
  ));
}
