"use client";

import { Pressable } from "@app/ui/elements/pressable";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";

export const EmptyCart = () => (
  <View className="flex-1 items-center justify-center p-4">
    <View className="h-16 w-16 items-center justify-center rounded-full bg-gray-200">
      {/* TODO: Add bag icon component */}
      <Text className="text-2xl">🛍️</Text>
    </View>
    <Text className="mt-4 text-base font-semibold text-gray-900">Your cart is empty</Text>
    <Pressable
      className="mt-4 rounded-lg bg-blue-600 px-6 py-2"
      onPress={() => {
        /* TODO: Navigate to home */
      }}
    >
      <Text className="font-medium text-white">Continue Shopping</Text>
    </Pressable>
  </View>
);
