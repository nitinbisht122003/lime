import { useState } from "react";

import type { SiblingViewModel } from "@app/types/limeroad";
import { Image } from "@app/ui/elements/image";
import { Pressable } from "@app/ui/elements/pressable";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { cn } from "@app/ui/utils/cn";

interface SiblingViewProps {
  siblings: SiblingViewModel[];
  className?: string;
}

export default function SiblingSelector({ siblings, className }: SiblingViewProps) {
  const [selectedSibling, setSelectedSibling] = useState<SiblingViewModel | undefined>(siblings[0]);

  if (!siblings.length || !selectedSibling) {
    return null;
  }

  return (
    <View className={cn("flex flex-col gap-5", className)}>
      <View className="flex flex-row items-center">
        <Text className="text-base font-medium">Colours:</Text>
        <Text className="ml-1 text-base capitalize text-gray-500">{selectedSibling.color}</Text>
      </View>

      <View className="flex max-h-[180px] flex-row gap-3 overflow-x-auto">
        {siblings.map((sibling) => (
          <Pressable
            key={sibling.id}
            className={`relative h-[64px] w-[54px] rounded-lg ${
              selectedSibling.id === sibling.id ? "border-2 border-green-400" : ""
            }`}
            onPress={() => setSelectedSibling(sibling)}
          >
            <View className="relative h-full w-full overflow-hidden rounded-lg">
              <Image
                src={sibling.image_url}
                alt={sibling.color}
                className="h-full w-full object-cover"
              />
              {selectedSibling.id === sibling.id && (
                <View className="absolute inset-0 bg-black bg-opacity-40" />
              )}
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
