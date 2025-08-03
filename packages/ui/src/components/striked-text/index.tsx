import type { ComponentProps } from "react";

import { Text } from "../../elements/text";
import { View } from "../../elements/view";

type StrikedTextProps = ComponentProps<typeof Text>;

export const StrikedText = ({ children, ...props }: StrikedTextProps) => {
  return (
    <View className="relative">
      <Text {...props}>{children}</Text>
      <View className="bg-lr-grey-500 absolute top-1/2 h-[1px] w-full -rotate-6" />
    </View>
  );
};
