"use client";

import { Path } from "react-native-svg";

import { createIcon } from "../components/icon";

export const FilterIcon = createIcon({
  viewBox: "0 0 12 13",
  path: (
    <Path
      d="M10.2.5H1.8A1.8 1.8 0 0 0 0 2.3v.702c0 .248.051.493.15.72v.036c.085.193.205.368.354.516L4.2 7.946V11.9a.6.6 0 0 0 .87.534l2.4-1.2a.6.6 0 0 0 .33-.534V7.946l3.672-3.672c.15-.148.354-.516.354-.516v-.036a1.8 1.8 0 0 0 .174-.72V2.3A1.8 1.8 0 0 0 10.2.5M6.774 7.274A.6.6 0 0 0 6.6 7.7v2.628l-1.2.6V7.7a.6.6 0 0 0-.174-.426L1.2 2.9h9.6zM10.8 2.9H1.2v-.6a.6.6 0 0 1 .6-.6h8.4a.6.6 0 0 1 .6.6z"
      fill="currentColor"
      strokeWidth="0.001"
    />
  )
});
