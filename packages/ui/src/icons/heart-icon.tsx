"use client";

import { Path } from "react-native-svg";

import { createIcon } from "../components/icon";

export const HeartIconHOC = function HeartIcon({
  fill = "none",
  stroke = "currentColor"
}: { fill?: string; stroke?: string } = {}) {
  return createIcon({
    viewBox: "0 0 24 25",
    path: (
      <Path
        d="M20.1603 5.50017C19.1002 4.43737 17.6951 3.78871 16.1986 3.67134C14.7021 3.55397 13.213 3.97563 12.0003 4.86017C10.7279 3.9138 9.14427 3.48468 7.5682 3.6592C5.99212 3.83373 4.54072 4.59894 3.50625 5.80075C2.47178 7.00256 1.9311 8.55169 1.99308 10.1362C2.05506 11.7207 2.71509 13.2228 3.84028 14.3402L10.0503 20.5602C10.5703 21.0719 11.2707 21.3588 12.0003 21.3588C12.7299 21.3588 13.4303 21.0719 13.9503 20.5602L20.1603 14.3402C21.3279 13.1654 21.9832 11.5764 21.9832 9.92017C21.9832 8.26389 21.3279 6.6749 20.1603 5.50017Z"
        strokeWidth={2}
        fill={fill}
        stroke={stroke}
      />
    )
  });
};
