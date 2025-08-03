"use client";

import type { ComponentRef } from "react";
import { useEffect, useRef, useState } from "react";

import type { SizeGuideViewModel, SizeUnit, VariantMap } from "@app/types/limeroad";
import { Radio, RadioGroup, RadioIcon, RadioIndicator } from "@app/ui/components/radio";
import { Image } from "@app/ui/elements/image";
import { Pressable } from "@app/ui/elements/pressable";
import { ScrollView } from "@app/ui/elements/scroll-view";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { CircleIcon } from "@app/ui/icons/circle-icon";
import { cn } from "@app/ui/utils/cn";

import { useProductVipContext } from "../../hooks/product-vip";

type TabType = "size_chart" | "measurement";

interface SizeGuideProps {
  sizeGuide: SizeGuideViewModel;
}

export const SizeGuide = ({ sizeGuide }: SizeGuideProps) => {
  const { selectedSize, setSelectedSize, unit, setUnit } = useProductVipContext();
  const [activeTab, setActiveTab] = useState<TabType>("size_chart");
  const { measurement_guide, size_chart, selectable } = sizeGuide;

  const containerRef = useRef<ComponentRef<typeof ScrollView>>(null);
  const sizeChartRef = useRef<ComponentRef<typeof View>>(null);
  const measurementRef = useRef<ComponentRef<typeof View>>(null);

  const handleUnitChange = (newUnit: SizeUnit) => {
    setUnit(newUnit);
  };

  const onSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const scrollToSection = (section: TabType) => {
    const targetRef = section === "size_chart" ? sizeChartRef : measurementRef;
    if (targetRef.current) {
      (targetRef.current as unknown as HTMLElement).scrollIntoView({ behavior: "smooth" });
    }
    setActiveTab(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !sizeChartRef.current || !measurementRef.current) return;

      const container = containerRef.current as unknown as HTMLElement;
      const sizeChartRect = (
        sizeChartRef.current as unknown as HTMLElement
      ).getBoundingClientRect();
      const measurementRect = (
        measurementRef.current as unknown as HTMLElement
      ).getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const sizeChartVisibility = Math.max(
        0,
        Math.min(containerRect.bottom, sizeChartRect.bottom) -
          Math.max(containerRect.top, sizeChartRect.top)
      );
      const measurementVisibility = Math.max(
        0,
        Math.min(containerRect.bottom, measurementRect.bottom) -
          Math.max(containerRect.top, measurementRect.top)
      );

      if (sizeChartVisibility > measurementVisibility) {
        setActiveTab("size_chart");
      } else {
        setActiveTab("measurement");
      }
    };

    const container = containerRef.current as unknown as HTMLElement;
    console.log("container", container);
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <View className="flex flex-col">
      <View className="border-lr-grey-400 sticky top-0 z-10 flex w-full flex-row items-center justify-between gap-2 border-b bg-white">
        <Pressable
          className={cn(
            "w-[50%] cursor-pointer items-center justify-center border-b-2",
            activeTab === "size_chart"
              ? "border-lr-grey-700 text-lr-grey-900"
              : "text-lr-grey-500 border-transparent"
          )}
          onPress={() => scrollToSection("size_chart")}
        >
          <Text className="text-base font-medium">Size Chart</Text>
        </Pressable>
        <Pressable
          className={cn(
            "w-[50%] cursor-pointer items-center justify-center border-b-2",
            activeTab === "measurement"
              ? "border-lr-grey-700 text-lr-grey-900"
              : "text-lr-grey-500 border-transparent"
          )}
          onPress={() => scrollToSection("measurement")}
        >
          <Text className="text-base font-medium">How to Measure</Text>
        </Pressable>
      </View>

      <ScrollView ref={containerRef} className="flex h-[500px] flex-col">
        <View ref={sizeChartRef} className="flex flex-col gap-6 p-4">
          <View className="flex flex-row items-center justify-end justify-center gap-2">
            <View className="w-[50%]">
              <Text className="text-lr-grey-500 text-sm">Size Guide</Text>
            </View>
            <View className="w-[50%] flex-row justify-end">
              <View className="flex-row items-center">
                <Pressable
                  className={cn(
                    "cursor-pointer items-center rounded-md px-4 py-1",
                    unit === "cm"
                      ? "border-lr-grey-900 bg-lr-grey-500 text-white"
                      : "bg-transparent"
                  )}
                  onPress={() => handleUnitChange("cm")}
                >
                  <Text className={unit === "cm" ? "text-white" : "text-black"}>cm</Text>
                </Pressable>
                <Pressable
                  className={cn(
                    "cursor-pointer items-center rounded-md px-4 py-1",
                    unit === "in"
                      ? "border-lr-grey-900 bg-lr-grey-500 text-white"
                      : "bg-transparent"
                  )}
                  onPress={() => handleUnitChange("in")}
                >
                  <Text className={unit === "in" ? "text-white" : "text-black"}>in</Text>
                </Pressable>
              </View>
            </View>
          </View>

          <View className="text-lr-grey-600 flex flex-col">
            <View className="border-lr-grey-200 flex flex-row border-b py-2">
              {selectable && (
                <View className="w-[60px] items-center">
                  <Text className="text-xs font-normal">Select</Text>
                </View>
              )}
              {size_chart.headers.map((header) => (
                <View key={header.key} className="flex-1 items-center">
                  <Text className="text-center text-xs font-normal">{header.label}</Text>
                </View>
              ))}
            </View>

            <RadioGroup className="flex w-full" value={selectedSize} onChange={onSizeSelect}>
              {Object.entries(size_chart.variant_map).map(([variantId, measurements]) => (
                <Radio value={variantId} className="w-full py-3">
                  <View className="w-[55px] items-center justify-center">
                    <RadioIndicator className="h-4 w-4">
                      <RadioIcon as={CircleIcon} size="sm" fill="black" />
                    </RadioIndicator>
                  </View>
                  {measurements.map((measurement: VariantMap) => (
                    <View key={measurement.key} className="flex-1 items-center justify-center">
                      <Text className="text-xs">{measurement.value[unit]}</Text>
                    </View>
                  ))}
                </Radio>
              ))}
            </RadioGroup>
          </View>

          <Text className="text-lr-grey-500 mt-4 text-center text-xs">
            Sizechart provided is as per the garment measurement and not the body
          </Text>
        </View>

        {measurement_guide && (
          <View ref={measurementRef} className="flex flex-col gap-5 p-4">
            {measurement_guide.description && (
              <Text className="text-md text-start font-normal">
                {measurement_guide.description}
              </Text>
            )}
            <Image
              src={measurement_guide.image}
              alt="Measurement Guide"
              className="h-auto w-full rounded-lg"
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};
