import React from "react";

export default interface SearchDatas {
  heading: string;
  search: Array<SearchData>;
}

interface SearchData {
  title: string;
  Icon: React.ReactElement;
  link: string;
}
