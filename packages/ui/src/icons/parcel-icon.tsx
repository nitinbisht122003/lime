"use client";

import { Circle, Path } from "react-native-svg";

import { createIcon } from "../components/icon";

export const ParcelIcon = createIcon({
  viewBox: "0 0 20 20",
  path: (
    <>
      <Circle cx="10" cy="10" r="9.5" stroke="currentColor" />
      <Path
        d="M11.5 9v-.1a.4.4 0 0 1-.196-.052l-1.255-.7L10 8.12l-.049.027-1.25.695-.001.001a.4.4 0 0 1-.4 0 .4.4 0 0 1-.2-.344V5.9H6.5a.6.6 0 0 0-.6.6v7a.6.6 0 0 0 .6.6h7a.6.6 0 0 0 .6-.6v-7a.6.6 0 0 0-.6-.6h-1.6v2.6a.4.4 0 0 1-.4.4zm0 0a.5.5 0 0 0 .5-.5V6.1L8 8.5a.5.5 0 0 0 .75.43L10 8.235l1.255.7A.5.5 0 0 0 11.5 9Zm-.4-3v-.1H8.9v1.915l.15-.083.744-.42h.001a.4.4 0 0 1 .4 0h.001l.755.42.149.083zm-2.6 4.9h-1a.4.4 0 0 1 0-.8h1a.4.4 0 1 1 0 .8Zm-1.283 1.317A.4.4 0 0 1 7.5 12.1h3a.4.4 0 1 1 0 .8h-3a.4.4 0 0 1-.283-.683ZM6.5 5.1h7a1.4 1.4 0 0 1 1.4 1.4v7a1.4 1.4 0 0 1-1.4 1.4h-7a1.4 1.4 0 0 1-1.4-1.4v-7a1.4 1.4 0 0 1 1.4-1.4Z"
        fill="currentColor"
        stroke="white"
        strokeWidth="0.2"
      />
    </>
  )
});
