"use client";

import { Circle, Path } from "react-native-svg";

import { createIcon } from "../components/icon";

export const LeftArrowCircleIconHOC = function LeftArrowCircleIcon({
  fill = "none",
  stroke = "none"
}: { fill?: string; stroke?: string } = {}) {
  return createIcon({
    viewBox: "0 0 24 25",
    path: (
      <>
        <Circle cx={12} cy={12} r={10} stroke={stroke} strokeWidth={2} fill={fill} />
        <Path d="m12 8-4 4 4 4m4-4H8" stroke={stroke} strokeWidth={2} fill="none" />
      </>
    )
  });
};
