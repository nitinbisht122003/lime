"use client";

import type { ComponentProps } from "react";
import { useCallback, useState } from "react";

import type { CartItemViewModel } from "@app/types/limeroad";
import { useRemoveCartItem } from "@app/services/limeroad/mutations/cart";
import { Button, ButtonIcon } from "@app/ui/components/button";
import { View } from "@app/ui/elements/view";
import { TrashIcon } from "@app/ui/icons/trash-icon";

import { useGlobalContext } from "../../hooks/global";
import { CartItemDetails } from "./cart-item-details";
import { CartItemImage } from "./cart-item-image";
import { RemoveItemSheet } from "./remove-item-sheet";

type CartItemProps = ComponentProps<typeof View> & {
  item: CartItemViewModel;
};

export const CartItem = ({ item, ...props }: CartItemProps) => {
  const { setIsLoading } = useGlobalContext();

  const { mutate: removeCartItem } = useRemoveCartItem();

  const [isRemoveSheetOpen, setIsRemoveSheetOpen] = useState(false);

  const { id, name, image, sizeOOS, allSizeOOS } = item;

  const handleRemoveItem = useCallback(() => {
    setIsLoading(true);

    removeCartItem(
      { itemId: id },
      {
        onSuccess: () => {
          setIsRemoveSheetOpen(false);
        },
        onSettled: () => {
          setIsLoading(false);
        }
      }
    );
  }, [id, removeCartItem, setIsLoading]);

  const handleAddToWishlist = useCallback(() => {
    setIsLoading(true);

    removeCartItem(
      { itemId: id, wishlist: true },
      {
        onSuccess: () => {
          setIsRemoveSheetOpen(false);
        },
        onSettled: () => {
          setIsLoading(false);
        }
      }
    );
  }, [id, removeCartItem, setIsLoading]);

  return (
    <View {...props}>
      {/* Item Card */}
      <View className="flex-row">
        {/* Image Section */}
        <CartItemImage image={image} name={name} sizeOOS={sizeOOS} allSizeOOS={allSizeOOS} />
        {/* Details Section */}
        <CartItemDetails item={item} />
        {/* Remove Button */}
        <Button
          size="md"
          variant="ghost"
          onPress={() => setIsRemoveSheetOpen(true)}
          className="items-start"
        >
          <ButtonIcon as={TrashIcon} size="lg" className="text-lr-grey-800" />
        </Button>
        {/* Remove Item Sheet */}
        <RemoveItemSheet
          item={{ id, name, image }}
          open={isRemoveSheetOpen}
          onOpenChange={setIsRemoveSheetOpen}
          onRemove={handleRemoveItem}
          onMoveToWishlist={handleAddToWishlist}
        />
      </View>
      {/* Add More Rail */}
      {/* showAddMore && isAddMoreOpen && productRails?.rails[0] && (
        <View className="max-w-[calc(100vw-32px)] overflow-hidden" style={railStyle}>
        </View>
      ) */}
    </View>
  );
};
