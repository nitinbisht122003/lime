"use client";

import { Path } from "react-native-svg";

import { createIcon } from "../components/icon";

export const ImageStackIcon = createIcon({
  viewBox: "0 0 16 16",
  path: (
    <Path
      d="M14 11.583H4.665V2.249h9.333m0-1.333H4.666a1.333 1.333 0 0 0-1.333 1.333v9.334a1.333 1.333 0 0 0 1.333 1.333h9.333a1.334 1.334 0 0 0 1.334-1.333V2.249A1.334 1.334 0 0 0 13.999.916M2 3.583H.666v10.666a1.333 1.333 0 0 0 1.333 1.334h10.667v-1.334H1.999m8.64-7.14L8.806 9.47 7.499 7.896l-1.833 2.353h7.333z"
      strokeWidth={0.2}
      fill="white"
    />
  )
});
