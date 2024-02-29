import SearchDatas from "./SearchDatas";

export default interface SearchProps {
  datas: Array<SearchDatas>;
  emptyItemsMessege?: string;
  placeholder?: string;
}
