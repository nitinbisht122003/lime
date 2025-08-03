"use client";

import { useEffect, useState } from "react";

import type { SizeSelectorViewModel, SizeUnit } from "@app/types/limeroad";
import {
  BottomSheet,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetPortal
} from "@app/ui/components/bottomsheet";
import { Button, ButtonText } from "@app/ui/components/button";
import { Icon } from "@app/ui/components/icon";
import { Radio, RadioGroup } from "@app/ui/components/radio";
import { Image } from "@app/ui/elements/image";
import { Pressable } from "@app/ui/elements/pressable";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { ChevronLeftIcon } from "@app/ui/icons/chevron-left-icon";
import { cn } from "@app/ui/utils/cn";

import { useProductVipContext } from "../../hooks/product-vip";
import { Divider } from "../common/divider";
import { ProductInfo } from "./product-info";
import { SizeGuide } from "./size-guide";

interface SizeSelectorProps {
  sizeSelector: SizeSelectorViewModel;
  className?: string;
}

export const SizeSelector = ({ sizeSelector, className }: SizeSelectorProps) => {
  const { selectedSize, setSelectedSize, setSizeSelector, unit, productInfo } =
    useProductVipContext();
  const [sizeInfo, setSizeInfo] = useState<Record<SizeUnit, string> | undefined>(undefined);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  useEffect(() => {
    setSizeSelector(sizeSelector);
  }, [sizeSelector, setSizeSelector]);

  useEffect(() => {
    if (selectedSize) {
      setSizeInfo(sizeSelector.variants.find((variant) => variant.id === selectedSize)?.size_info);
    }
  }, [selectedSize, sizeSelector.variants]);

  const handleSizeSelect = (size: string) => {
    console.log("size", size);
    setSelectedSize(size);
  };

  const handleSizeGuideClick = () => {
    setIsSizeGuideOpen(true);
  };

  return (
    <View className={cn("flex flex-col gap-5", className)}>
      <View className="flex w-full flex-row items-center justify-between">
        <Text className="text-base font-medium">Size</Text>
        {sizeSelector.size_guide && (
          <Button
            onPress={handleSizeGuideClick}
            className="text-lr-grey-500 text-sm font-light underline"
          >
            <ButtonText className="text-lr-grey-500 text-sm font-light underline">
              Size Guide
            </ButtonText>
          </Button>
        )}
      </View>

      <View className="flex flex-col gap-3">
        {sizeInfo && (
          <View className="flex flex-row items-center gap-2">
            <Image
              src="https://n-img0.junaroad.com/images/Inch.svg"
              height={16}
              width={16}
              alt="size-info"
            />
            <Text className="text-lr-grey-500 text-sm font-light">{sizeInfo[unit]}</Text>
          </View>
        )}

        <RadioGroup
          value={selectedSize}
          className="flex flex-row gap-3"
          onChange={handleSizeSelect}
        >
          {sizeSelector.variants.map((variant) => (
            <Radio key={variant.id} value={variant.id}>
              <SizeChip
                size={variant.size}
                variant={variant.id === selectedSize ? "selected" : "default"}
                availability={variant.availability}
              />
            </Radio>
          ))}
        </RadioGroup>
      </View>

      {sizeSelector.size_guide && (
        <BottomSheet open={isSizeGuideOpen} onOpenChange={setIsSizeGuideOpen}>
          <BottomSheetPortal>
            <BottomSheetContent className="max-h-[100%]">
              <BottomSheetHeader className="flex flex-row items-center justify-start gap-2 bg-transparent">
                <Pressable onPress={() => setIsSizeGuideOpen(false)}>
                  <Icon as={ChevronLeftIcon} size="xl" />
                </Pressable>
                <Text className="text-base font-medium">Size Guide</Text>
              </BottomSheetHeader>
              <View className="py">
                <View className="px-4 pt-5">
                  {productInfo && (
                    <ProductInfo
                      productInfo={productInfo}
                      truncated_title={true}
                      show_image={true}
                      className="gap-3"
                    />
                  )}
                  <Divider
                    divider={{
                      orientation: "horizontal",
                      margin: {
                        top: 24,
                        bottom: 24
                      }
                    }}
                  />
                </View>

                <SizeGuide sizeGuide={sizeSelector.size_guide} />
              </View>
            </BottomSheetContent>
          </BottomSheetPortal>
        </BottomSheet>
      )}
    </View>
  );
};

interface SizeChipProps {
  size: string;
  variant: "selected" | "default";
  availability?: number;
}

const SizeChip = ({ size, variant, availability }: SizeChipProps) => {
  return (
    <View
      className={cn(
        "static flex flex-row items-center gap-2 rounded-md border px-4 py-2",
        variant === "selected" ? "border-lr-green-600" : "border-lr-grey-200"
      )}
    >
      <Text className="text-lr-grey-500 justify-center text-sm capitalize">{size}</Text>
      {availability && (
        <View className="w-[90% - 12px] bg-lr-orange-200 absolute bottom-[-9px] left-[5%] z-10 box-content flex h-2 flex-row items-center justify-center rounded px-1.5 py-1">
          <Text className="text-lr-grey-950 whitespace-nowrap text-xs font-normal">
            {availability} left
          </Text>
        </View>
      )}
    </View>
  );
};
