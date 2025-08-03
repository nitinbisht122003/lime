"use client";

import { Path } from "react-native-svg";

import type { CustomIconHOC } from "../types";
import { createIcon } from "../components/icon";

export const HomeIconHOC: CustomIconHOC = function HomeIcon({ fill = "none" } = {}) {
  return createIcon({
    viewBox: "0 0 25 25",
    path: (
      <>
        <Path
          d="M23.0996 12.1143V21H2.5V12.1152L12.7998 2.38672L23.0996 12.1143Z"
          fill={fill}
          stroke="currentColor"
        />
        <Path d="M23.0996 22V24H2.5V22H23.0996Z" fill={fill} stroke="currentColor" />
        <Path
          d="M23.7461 11.8838L23.5537 12.0938L13.3096 2.58984L12.7998 2.11621L12.29 2.58984L2.04492 12.0938L1.85254 11.8838L12.7998 1.70312L23.7461 11.8838Z"
          fill={fill}
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <Path
          d="M16.1396 14.8896V21.0898H9.93945V14.8896H16.1396Z"
          fill="white"
          stroke="currentColor"
        />
      </>
    )
  });
};
