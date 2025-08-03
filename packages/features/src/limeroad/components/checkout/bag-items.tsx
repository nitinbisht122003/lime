"use client";

import type { ComponentProps } from "react";
import { useCallback, useState } from "react";

import type { CheckoutBagItemsViewModel } from "@app/types/limeroad";
import { Button, ButtonIcon, ButtonText } from "@app/ui/components/button";
import { View } from "@app/ui/elements/view";
import { ChevronDownIcon } from "@app/ui/icons/chevron-down-icon";
import { ChevronUpIcon } from "@app/ui/icons/chevron-up-icon";
import { cn } from "@app/ui/utils/cn";

import { BagItem } from "./bag-item";

type CheckoutBagItemsProps = ComponentProps<typeof View> & {
  bag: CheckoutBagItemsViewModel;
};

const maxVisibleItems = 1;

export function BagItems({ bag, className, ...props }: CheckoutBagItemsProps) {
  const { items } = bag;

  const [visibleItems, setVisibleItems] = useState(items.slice(0, maxVisibleItems));
  const [isViewAll, setIsViewAll] = useState(false);

  const toggleViewAll = useCallback(() => {
    setIsViewAll((isViewAll) => {
      const newVisibleItems = isViewAll ? items.slice(0, maxVisibleItems) : items;

      setVisibleItems(newVisibleItems);

      return !isViewAll;
    });
  }, [items]);

  if (items.length === 0) return null;

  return (
    <View className={cn("gap-2", className)} {...props}>
      {visibleItems.map((item) => (
        <BagItem key={item.id} item={item} />
      ))}
      {items.length > maxVisibleItems && (
        <Button
          variant="outline"
          size="xs"
          action="secondary"
          onPress={toggleViewAll}
          className="mx-auto h-6 w-20 gap-1 rounded-xl px-1"
        >
          <ButtonText>{isViewAll ? "View Less" : "View All"}</ButtonText>
          <ButtonIcon as={isViewAll ? ChevronUpIcon : ChevronDownIcon} />
        </Button>
      )}
    </View>
  );
}
