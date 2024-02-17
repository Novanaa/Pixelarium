import type SearchDatas from "./SearchDatas";

export default interface DesktopSearchProps {
  datas: Array<SearchDatas>;
  heading: string;
  emptyItemsMessege?: string;
  placeholder?: string
}
