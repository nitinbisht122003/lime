"use client";

import { Circle, Path } from "react-native-svg";

import { createIcon } from "../components/icon";

export const ExchangeIcon = function ExchangeIcon({
  fill = "#3265CC",
  stroke = "#FCFCFD",
  circleStroke = "#3265CC"
}: { fill?: string; stroke?: string; circleStroke?: string } = {}) {
  return createIcon({
    viewBox: "0 0 20 20",
    path: (
      <>
        <Circle cx="10" cy="10" r="9.5" stroke={circleStroke} />
        <Path
          d="m6.51 8.232-.122.134h6.209c.114 0 .226.05.309.142a.52.52 0 0 1 .131.35.52.52 0 0 1-.131.35.42.42 0 0 1-.309.14h-7.28a.4.4 0 0 1-.241-.081.5.5 0 0 1-.164-.22v-.001a.54.54 0 0 1-.027-.287.5.5 0 0 1 .121-.253l2.08-2.284a.42.42 0 0 1 .31-.142.42.42 0 0 1 .31.142.52.52 0 0 1 .133.351.52.52 0 0 1-.132.352zm8.571 2.72v.001c.035.09.045.19.028.287a.5.5 0 0 1-.121.253l-2.08 2.284a.4.4 0 0 1-.144.106.4.4 0 0 1-.333 0 .4.4 0 0 1-.144-.105v-.001a.5.5 0 0 1-.098-.16.54.54 0 0 1 .098-.543l1.196-1.307.123-.134h-6.21a.42.42 0 0 1-.308-.141.52.52 0 0 1-.132-.35.52.52 0 0 1 .132-.35.42.42 0 0 1 .308-.142h7.282a.42.42 0 0 1 .24.082c.072.054.13.13.163.22Z"
          fill={fill}
          stroke={stroke}
          strokeWidth=".16"
        />
      </>
    )
  });
};
