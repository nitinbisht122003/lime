import { isWeb } from "@gluestack-ui/nativewind-utils/IsWeb";
import { tva } from "@gluestack-ui/nativewind-utils/tva";

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
const baseStyle = isWeb ? "flex flex-col" : "";

export const viewStyle = tva({
  base: baseStyle
});
