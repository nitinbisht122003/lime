import type { ComponentProps } from "react";

import { View } from "@app/ui/elements/view";

type FabsProps = ComponentProps<typeof View>;

export function Fabs({ ...props }: FabsProps) {
  return <View {...props} />;
}
