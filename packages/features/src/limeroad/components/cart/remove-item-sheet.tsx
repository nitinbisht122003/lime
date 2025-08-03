import type { ComponentProps } from "react";

import {
  BottomSheet,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetPortal,
  BottomSheetTitle
} from "@app/ui/components/bottomsheet";
import { Button, ButtonText } from "@app/ui/components/button";
import { Divider } from "@app/ui/components/divider";
import { Icon } from "@app/ui/components/icon";
import { Image } from "@app/ui/elements/image";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { XIcon } from "@app/ui/icons/x-icon";

type RemoveItemSheetProps = ComponentProps<typeof BottomSheet> & {
  item: {
    id: number;
    name: string;
    image: string;
  };
  onRemove?: (itemId: number) => void;
  onMoveToWishlist?: (itemId: number) => void;
};

export const RemoveItemSheet = ({
  item,
  open,
  onOpenChange,
  onRemove,
  onMoveToWishlist
}: RemoveItemSheetProps) => {
  return (
    <BottomSheet open={open} onOpenChange={onOpenChange}>
      <BottomSheetPortal>
        <BottomSheetContent className="rounded-t-xl px-4 py-5">
          {/* Header */}
          <View className="flex-row items-center gap-2.5">
            <Image src={item.image} alt={item.name} width={40} height={48} borderRadius="md" />
            <View className="flex-1 flex-row justify-between">
              <View className="gap-1">
                <BottomSheetTitle className="text-lr-grey-950 text-sm font-semibold">
                  Move from Bag
                </BottomSheetTitle>
                <Text className="text-lr-grey-700 text-xs">
                  Are you sure, you want to remove this item?
                </Text>
              </View>
              <BottomSheetClose className="flex-row items-start p-1">
                <Icon as={XIcon} size="3xs" className="text-lr-grey-800" />
              </BottomSheetClose>
            </View>
          </View>
          <Divider className="my-3.5" />
          {/* Footer */}
          <View className="flex flex-row">
            <Button variant="ghost" className="flex-1" onPress={() => onRemove?.(item.id)}>
              <ButtonText>Remove Item</ButtonText>
            </Button>
            <Divider orientation="vertical" className="h-10" />
            <Button
              variant="ghost"
              className="flex-1"
              onPress={() => {
                onMoveToWishlist?.(item.id);
              }}
            >
              <ButtonText className="text-lr-green-500">Move to Wishlist</ButtonText>
            </Button>
          </View>
        </BottomSheetContent>
      </BottomSheetPortal>
    </BottomSheet>
  );
};
