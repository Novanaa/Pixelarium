import SearchDatas from "./SearchDatas";

export default interface SearchProps {
  datas: Array<SearchDatas>;
  heading: string;
  emptyItemsMessege?: string;
  placeholder?: string;
}
