"use client";

import type { ComponentProps } from "react";
import { useCallback, useState } from "react";

import type { CartItemViewModel } from "@app/types/limeroad";
import { useUpdateCartItemQty, useUpdateCartItemSize } from "@app/services/limeroad/mutations/cart";
import { Badge, BadgeText } from "@app/ui/components/badge";
import { Icon } from "@app/ui/components/icon";
import { StrikedText } from "@app/ui/components/striked-text";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { LocationPinIcon } from "@app/ui/icons/location-pin-icon";
import { cn } from "@app/ui/utils/cn";

import { useGlobalContext } from "../../hooks/global";
import { SelectorSheet } from "../selector-sheet";

export const CartItemDetails = ({
  item,
  footer
}: {
  item: CartItemViewModel;
  footer?: React.ReactNode;
}) => {
  // data
  const {
    name,
    brand,
    totalPrice,
    totalMRP,
    discountPercent,
    bestOffer,
    formattedDeliveryDate,
    sizeOOS,
    allSizeOOS,
    sizeOptions,
    qtyOptions,
    selectedSize,
    selectedQty
  } = item;

  // hooks
  const { setIsLoading } = useGlobalContext();
  const { mutate: updateItemQty } = useUpdateCartItemQty();
  const { mutate: updateItemSize } = useUpdateCartItemSize();

  const [sizeSelectorOpen, setSizeSelectorOpen] = useState(false);
  const [qtySelectorOpen, setQtySelectorOpen] = useState(false);

  // actions
  const handleSizeChange = useCallback(
    (variantId: string) => {
      setIsLoading(true);

      updateItemSize(
        { itemId: item.id, variantId },
        {
          onSuccess: () => {
            setIsLoading(false);
          },
          onSettled: () => {
            setIsLoading(false);
            setSizeSelectorOpen(false);
          }
        }
      );
    },
    [item.id, updateItemSize, setIsLoading]
  );

  const handleQtyChange = useCallback(
    (qty: string) => {
      setIsLoading(true);

      updateItemQty(
        { itemId: item.id, qty: parseInt(qty, 10) },
        {
          onSuccess: () => {
            setIsLoading(false);
          },
          onSettled: () => {
            setIsLoading(false);
            setQtySelectorOpen(false);
          }
        }
      );
    },
    [item.id, setIsLoading, updateItemQty]
  );

  // derived
  const showSizeSelector = !allSizeOOS;
  const showQtySelector = !sizeOOS;
  const showEdd = !!formattedDeliveryDate && !sizeOOS;

  return (
    <View className="ml-3 flex-1 justify-between gap-3 py-1">
      <View>
        <CartItemName name={name} />
        <CartItemBrand brand={brand} className="mt-1" />
        <CartItemPriceSection
          price={totalPrice}
          mrp={totalMRP}
          discount={discountPercent}
          className="mt-3"
        />
        <View className="mt-3 flex-row items-center gap-2.5">
          {showSizeSelector && (
            <SelectorGroup>
              <SelectorGroupLabel>Size:</SelectorGroupLabel>
              <SelectorSheet
                size="md"
                triggerSize="sm"
                title="Select Size"
                open={sizeSelectorOpen}
                onOpenChange={setSizeSelectorOpen}
                options={sizeOptions}
                value={selectedSize?.value}
                onChange={handleSizeChange}
              />
            </SelectorGroup>
          )}

          {showQtySelector && (
            <SelectorGroup>
              <SelectorGroupLabel>Qty:</SelectorGroupLabel>
              <SelectorSheet
                size="md"
                triggerSize="sm"
                title="Select Quantity"
                open={qtySelectorOpen}
                onOpenChange={setQtySelectorOpen}
                options={qtyOptions}
                value={selectedQty?.value}
                onChange={handleQtyChange}
              />
            </SelectorGroup>
          )}
        </View>

        {bestOffer && (
          <View className="mt-3 flex-row items-center gap-1">
            <Badge variant="solid" action="success" size="sm">
              <BadgeText>{bestOffer.offer}</BadgeText>
            </Badge>
            <Text className="text-lr-grey-600 text-xs">{bestOffer.message}</Text>
          </View>
        )}
      </View>
      {/* Delivery Details */}
      {showEdd && <CartItemDeliveryDetails deliveryDate={formattedDeliveryDate} />}
      {/* Footer */}
      {footer}
    </View>
  );
};

type CartItemNameProps = {
  name: string;
} & ComponentProps<typeof View>;

export const CartItemName = ({ name, className, ...props }: CartItemNameProps) => {
  return (
    <Text
      className={cn("text-lr-grey-800 w-9/10 text-sm font-semibold capitalize", className)}
      isTruncated
      {...props}
    >
      {name}
    </Text>
  );
};

type CartItemBrandProps = {
  brand: string;
} & ComponentProps<typeof View>;

export const CartItemBrand = ({ brand, className, ...props }: CartItemBrandProps) => {
  return (
    <Text className={cn("text-lr-grey-500 text-xs", className)} {...props}>
      Sold by: {brand}
    </Text>
  );
};

type CartItemPriceSectionProps = {
  price: number;
  mrp: number;
  discount: number;
} & ComponentProps<typeof View>;

export const CartItemPriceSection = ({
  price,
  mrp,
  discount,
  className,
  ...props
}: CartItemPriceSectionProps) => {
  return (
    <View className={cn("flex-row items-center gap-2 text-sm", className)} {...props}>
      <Text className="text-lr-grey-800 font-semibold">₹{price}</Text>
      {mrp > price && <StrikedText className="text-lr-grey-500">₹{mrp}</StrikedText>}
      {discount > 0 && <Text className="text-lr-green-600 font-medium">{discount}% off</Text>}
    </View>
  );
};

type CartItemDeliveryDetailsProps = {
  deliveryDate: string;
} & ComponentProps<typeof View>;

export const CartItemDeliveryDetails = ({
  deliveryDate,
  className,
  ...props
}: CartItemDeliveryDetailsProps) => {
  return (
    <View
      className={cn("text-lr-grey-600 flex-row items-center gap-1 text-xs", className)}
      {...props}
    >
      <Icon as={LocationPinIcon} size="xs" className="text-lr-green-600" />
      <Text>Delivery by</Text>
      <Text className="truncate">{deliveryDate}</Text>
    </View>
  );
};

export const SelectorGroup = ({ children }: { children: React.ReactNode }) => {
  return <View className="flex-row items-center gap-1">{children}</View>;
};

export const SelectorGroupLabel = ({ children }: { children: React.ReactNode }) => {
  return <Text className="text-lr-grey-600 text-xs">{children}</Text>;
};
