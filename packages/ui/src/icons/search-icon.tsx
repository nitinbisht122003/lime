"use client";

import { Path } from "react-native-svg";

import { createIcon } from "../components/icon";

export const SearchIcon = createIcon({
  viewBox: "0 0 24 24",
  path: (
    <>
      <Path
        d="m21.708 20.288-3.71-3.68a9 9 0 1 0-1.39 1.39l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39m-10.71-2.29a7 7 0 1 1 0-14.002 7 7 0 0 1 0 14.001"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.1"
      />
    </>
  )
});
