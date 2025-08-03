"use client";

import { Path } from "react-native-svg";

import { createIcon } from "../components/icon";

export const HeptagramIcon = createIcon({
  viewBox: "0 0 24 20",
  path: (
    <Path d="m12-2 .817 10.027 7.668-6.512-6.512 7.668L24 10l-10.027.817 6.512 7.668-7.668-6.512L12 22l-.817-10.027-7.668 6.512 6.512-7.668L0 10l10.027-.817-6.512-7.668 7.668 6.512z" />
  )
});
