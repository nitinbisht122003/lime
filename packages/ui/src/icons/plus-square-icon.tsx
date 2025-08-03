import { Path } from "react-native-svg";

import { createIcon } from "../components/icon";

export const PlusSquareIcon = createIcon({
  viewBox: "0 0 24 24",
  path: (
    <>
      <Path
        d="M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"
        strokeWidth={2}
      />
      <Path d="M12 9v6m3-3H9" strokeWidth={2} strokeLinecap="round" />
    </>
  )
});
