import type { ComponentProps } from "react";

import type { DividerViewModel } from "@app/types/limeroad";
import { Divider as UIDivider } from "@app/ui/components/divider";

type DividerProps = ComponentProps<typeof UIDivider> & {
  divider: DividerViewModel;
};

export const Divider = ({ divider, ...props }: DividerProps) => {
  const { orientation, margin } = divider;

  return (
    <UIDivider
      {...props}
      orientation={orientation}
      style={{
        marginTop: margin?.top,
        marginBottom: margin?.bottom,
        marginLeft: margin?.left,
        marginRight: margin?.right
      }}
    />
  );
};
