"use client";

import { Path } from "react-native-svg";

import { createIcon } from "../components/icon";

export const SolidCrossIconHOC = function SolidCrossIcon({
  fill = "none",
  stroke = "white"
}: { fill?: string; stroke?: string } = {}) {
  return createIcon({
    viewBox: "0 0 16 16",
    path: (
      <Path
        d="M8 1.334c-3.667 0-6.667 3-6.667 6.666s3 6.667 6.667 6.667 6.667-3 6.667-6.667-3-6.666-6.667-6.666m2.467 8.2a.644.644 0 0 1 0 .933.644.644 0 0 1-.934 0L8 8.934l-1.533 1.533a.644.644 0 0 1-.934 0 .644.644 0 0 1 0-.934L7.067 8 5.533 6.467a.644.644 0 0 1 0-.933.644.644 0 0 1 .934 0L8 7.067l1.533-1.533a.644.644 0 0 1 .934 0 .644.644 0 0 1 0 .933L8.933 8z"
        stroke={stroke}
        fill={fill}
        strokeWidth={0.1}
      />
    )
  });
};
