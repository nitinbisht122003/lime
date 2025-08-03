import type { ComponentProps } from "react";

import type { CheckoutBagItemViewModel } from "@app/types/limeroad";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { cn } from "@app/ui/utils/cn";

import {
  CartItemDeliveryDetails,
  CartItemName,
  CartItemPriceSection,
  SelectorGroup,
  SelectorGroupLabel
} from "../cart/cart-item-details";
import { CartItemImage } from "../cart/cart-item-image";

type CheckoutBagItemProps = ComponentProps<typeof View> & {
  item: CheckoutBagItemViewModel;
};

export function BagItem({ item, className, ...props }: CheckoutBagItemProps) {
  const { name, image } = item;

  return (
    <View className={cn("flex-row", className)} {...props}>
      {/* Image Section */}
      <CartItemImage image={image} name={name} size="sm" />
      {/* Details Section */}
      <BagItemDetails item={item} />
    </View>
  );
}

const BagItemDetails = ({ item }: { item: CheckoutBagItemViewModel }) => {
  const { name, totalPrice, totalMRP, discountPercent, formattedDeliveryDate, size, quantity } =
    item;

  const showEdd = !!formattedDeliveryDate;

  return (
    <View className="ml-3 flex-1 justify-between gap-2 py-1">
      <View>
        <CartItemName name={name} />
        <CartItemPriceSection
          price={totalPrice}
          mrp={totalMRP}
          discount={discountPercent}
          className="mt-2"
        />
        <View className="mt-2 flex-row items-center gap-2.5">
          <SelectorGroup>
            <SelectorGroupLabel>Size:</SelectorGroupLabel>
            <Text className="text-lr-grey-700 px-1 text-xs font-semibold">{size}</Text>
          </SelectorGroup>
          <SelectorGroup>
            <SelectorGroupLabel>Qty:</SelectorGroupLabel>
            <Text className="text-lr-grey-700 px-1 text-xs font-semibold">{quantity}</Text>
          </SelectorGroup>
        </View>
      </View>
      {/* Delivery Details */}
      {showEdd && <CartItemDeliveryDetails deliveryDate={formattedDeliveryDate} />}
    </View>
  );
};
