import { Path } from "react-native-svg";

import { createIcon } from "../components/icon";

export const CheckIcon = createIcon({
  viewBox: "0 0 16 16",
  path: (
    <>
      <Path d="M3 8 L6.5 12 L13 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  )
});
