"use client";

import { Path } from "react-native-svg";

import { createIcon } from "../components/icon";

export const ShareIconHOC = function ShareIcon({ fill = "none" }: { fill?: string } = {}) {
  return createIcon({
  viewBox: "0 0 21 21",
  path: (
    <Path
      d="M16.5 12.25a4 4 0 0 0-3.08 1.48l-5.1-2.35a3.64 3.64 0 0 0 0-2.26l5.1-2.35a4 4 0 1 0-.85-1.81L7.29 7.39a4 4 0 1 0 0 5.72l5.28 2.43a4 4 0 0 0-.07.71 4 4 0 1 0 4-4m0-10a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-12 10a2 2 0 1 1 0-4.002 2 2 0 0 1 0 4.001m12 6a2 2 0 1 1 0-4.002 2 2 0 0 1 0 4.001"
      strokeWidth={0.001}
      fill={fill}
    />
  )
})};