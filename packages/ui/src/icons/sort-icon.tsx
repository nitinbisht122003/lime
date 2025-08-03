"use client";

import { Path } from "react-native-svg";

import { createIcon } from "../components/icon";

export const SortIcon = createIcon({
  viewBox: "0 0 16 17",
  path: (
    <Path
      d="m6.807 4.64.526-.533v3.06a.667.667 0 1 0 1.334 0v-3.06l.526.533a.667.667 0 0 0 1.093-.217.67.67 0 0 0-.146-.73L8.473 2.027a.7.7 0 0 0-.22-.14.67.67 0 0 0-.506 0 .7.7 0 0 0-.22.14L5.86 3.693a.67.67 0 1 0 .947.947m2.386 7.72-.526.533v-3.06a.667.667 0 0 0-1.334 0v3.06l-.526-.533a.67.67 0 0 0-.947.947l1.667 1.666q.096.092.22.14a.63.63 0 0 0 .506 0 .7.7 0 0 0 .22-.14l1.667-1.666a.67.67 0 1 0-.947-.947"
      fill="currentColor"
      strokeWidth="0.1"
    />
  )
});
