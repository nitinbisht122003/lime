"use client";

import { Path } from "react-native-svg";

import { createIcon } from "../components/icon";

export const BellIcon = createIcon({
  viewBox: "0 0 24 25",
  path: (
    <>
      <Path
        d="M18 9.5C18 7.9087 17.3679 6.38258 16.2426 5.25736C15.1174 4.13214 13.5913 3.5 12 3.5C10.4087 3.5 8.88258 4.13214 7.75736 5.25736C6.63214 6.38258 6 7.9087 6 9.5C6 16.5 3 18.5 3 18.5H21C21 18.5 18 16.5 18 9.5Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 19.5C14.6951 20.1083 14.2575 20.6132 13.731 20.9642C13.2045 21.3153 12.6076 21.5 12 21.5C11.3924 21.5 10.7955 21.3153 10.269 20.9642C9.74247 20.6132 9.30487 20.1083 9 19.5"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </>
  )
});
