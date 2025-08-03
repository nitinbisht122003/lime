"use client";

import { Path } from "react-native-svg";

import type { CustomIconHOC } from "../types";
import { createIcon } from "../components/icon";

export const BagIconHOC: CustomIconHOC = function BagIcon({ fill = "none" } = {}) {
  return createIcon({
    viewBox: "0 0 20 20",
    path: (
      <>
        <Path
          d="M15.836 5.833h-2.5V5a3.333 3.333 0 0 0-6.667 0v.833h-2.5a.833.833 0 0 0-.833.834v9.166a2.5 2.5 0 0 0 2.5 2.5h8.333a2.5 2.5 0 0 0 2.5-2.5V6.667a.833.833 0 0 0-.833-.834M8.336 5a1.667 1.667 0 1 1 3.333 0v.833H8.336zm6.667 10.833a.833.833 0 0 1-.834.834H5.836a.833.833 0 0 1-.833-.834V7.5h1.666v.833a.833.833 0 0 0 1.667 0V7.5h3.333v.833a.834.834 0 0 0 1.667 0V7.5h1.667z"
          fill={fill}
          strokeWidth="0.1"
        />
      </>
    )
  });
};
