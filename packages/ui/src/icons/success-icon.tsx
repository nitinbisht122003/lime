import { Path } from "react-native-svg";

import { createIcon } from "../components/icon";

export const SuccessIconHOC = function SuccessIcon({ fill }: { fill?: string } = {}) {
  return createIcon({
    viewBox: "0 0 24 24",
    path: (
      <>
        <Path
          d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z"
          fill={fill}
          stroke="none"
        />
        <Path
          d="M16.2 10.3L11.4 15.1C11 15.5 10.4 15.5 10 15.1L7.8 12.9C7.4 12.5 7.4 11.9 7.8 11.5C8.2 11.1 8.8 11.1 9.2 11.5L10.7 13L14.8 8.9C15.2 8.5 15.8 8.5 16.2 8.9C16.6 9.3 16.6 9.9 16.2 10.3Z"
          fill="white"
          stroke="none"
        />
      </>
    )
  });
};
