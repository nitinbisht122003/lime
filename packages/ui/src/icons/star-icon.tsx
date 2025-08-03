"use client";

import { Path } from "react-native-svg";

import { createIcon } from "../components/icon";

export const StarIcon = createIcon({
  viewBox: "0 0 11 10",
  path: (
    <>
      <Path
        d="M10.5 4.051c.05-.25-.15-.55-.4-.55l-2.85-.4-1.3-2.6a.4.4 0 0 0-.2-.2C5.5.15 5.2.25 5.05.5L3.8 3.1l-2.85.4q-.225 0-.3.15c-.2.2-.2.5 0 .7l2.05 2-.5 2.85c0 .1 0 .2.05.3.15.25.45.35.7.2L5.5 8.35 8.05 9.7c.05.05.15.05.25.05h.1c.25-.05.45-.3.4-.6L8.3 6.3l2.05-2c.1-.05.15-.15.15-.25"
        fill="currentColor"
      />
    </>
  )
});
