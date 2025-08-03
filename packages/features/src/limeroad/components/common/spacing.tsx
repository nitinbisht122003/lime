import type { ComponentProps } from "react";

import type { SpacingViewModel } from "@app/types/limeroad";
import { View } from "@app/ui/elements/view";

type SpacingProps = ComponentProps<typeof View> & {
  spacing: SpacingViewModel;
};

export const Spacing = ({ spacing, ...props }: SpacingProps) => {
  const { value, orientation } = spacing;

  return (
    <View
      {...props}
      style={{
        width: orientation === "horizontal" ? value : "100%",
        height: orientation === "vertical" ? value : "100%"
      }}
    />
  );
};
