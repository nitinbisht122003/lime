"use client";

import { Path } from "react-native-svg";

import { createIcon } from "../components/icon";

export const InfoIcon = createIcon({
  viewBox: "0 0 24 24",
  path: (
    <>
      {/* Circle outline */}
      <Path
        d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Dot for "i" - positioned higher and smaller */}
      <Path
        d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z"
        fill="currentColor"
      />
      {/* Vertical line for "i" - better proportions and positioning */}
      <Path d="M11 10H13V18H11V10Z" fill="currentColor" />
    </>
  )
});
