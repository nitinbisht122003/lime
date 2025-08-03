import { Pressable } from "@app/ui/elements/pressable";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";

export const StickyBottom = ({
  allOutOfStock,
  _selectedItems,
  totalAmount
}: {
  allOutOfStock: boolean;
  _selectedItems: string[];
  totalAmount: number;
}) => (
  <View className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-4">
    {allOutOfStock ? (
      <View className="rounded-lg bg-blue-100 p-2">
        <Text className="text-center font-semibold text-blue-700">All items are out of stock</Text>
      </View>
    ) : _selectedItems.length > 0 ? (
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-lg font-semibold text-gray-900">₹{totalAmount}</Text>
          <Pressable
            onPress={() => {
              /* TODO: Show summary */
            }}
          >
            <Text className="text-sm text-gray-500">View Details</Text>
          </Pressable>
        </View>
        <Pressable
          className="ml-4 flex-1 rounded-lg bg-blue-600 py-3"
          onPress={() => {
            /* TODO: Navigate to checkout */
          }}
        >
          <Text className="text-center font-medium text-white">Proceed</Text>
        </Pressable>
      </View>
    ) : (
      <Pressable className="w-full rounded-lg bg-blue-600 py-3" disabled={true}>
        <Text className="text-center font-medium text-white">Select an item to Proceed</Text>
      </Pressable>
    )}
  </View>
);
