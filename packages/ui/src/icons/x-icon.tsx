"use client";

import { Circle, Path } from "react-native-svg";

import { createIcon } from "../components/icon";

export const XIcon = createIcon({
  viewBox: "0 0 14 14",
  path: (
    <>
      <Circle cx={7} cy={7} r={6.5} strokeWidth={1} fill="red" />
      <Path d="M13 1 1 13m12 0L1 1" strokeWidth={2} strokeLinecap="round" fill="white" />
    </>
  )
});
