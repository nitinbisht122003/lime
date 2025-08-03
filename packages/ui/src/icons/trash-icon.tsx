import { Path } from "react-native-svg";

import { createIcon } from "../components/icon";

export const TrashIcon = createIcon({
  viewBox: "0 0 20 20",
  path: (
    <Path
      d="M15.333 6.003h-2.666v-.667a2 2 0 0 0-2-2H9.333a2 2 0 0 0-2 2v.667H4.667a.667.667 0 0 0 0 1.333h.666v7.333a2 2 0 0 0 2 2h5.334a2 2 0 0 0 2-2V7.336h.666a.667.667 0 1 0 0-1.333m-6.666-.667a.667.667 0 0 1 .666-.667h1.334a.667.667 0 0 1 .666.667v.667H8.667zm4.666 9.333a.667.667 0 0 1-.666.667H7.333a.667.667 0 0 1-.666-.667V7.336h6.666z"
      strokeWidth={0.1}
    />
  )
});
