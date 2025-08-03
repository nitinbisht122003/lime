"use client";

import { Path } from "react-native-svg";

import { createIcon } from "../components/icon";

export const RightArrowIconHOC = function RightArrowIcon({
  fill = "none"
}: { fill?: string } = {}) {
  return createIcon({
    viewBox: "0 0 24 24",
    path: (
      <Path
        d="M12.293 4.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L17.586 13H4a1 1 0 1 1 0-2h13.586l-5.293-5.293a1 1 0 0 1 0-1.414"
        fill={fill}
        stroke={fill}
        strokeWidth="0.3"
      />
    )
  });
};
