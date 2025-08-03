"use client";

import type { VideoProps } from "./types";
import { Text } from "../../elements/text";
import { View } from "../../elements/view";

export const Video = ({ ..._props }: VideoProps) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Video</Text>
    </View>
  );
};
