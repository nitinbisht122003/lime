"use client";

import type { ComponentProps } from "react";
import { useState } from "react";
import { Dimensions } from "react-native";

import type {
  FilterOptionViewModel,
  FilterParams,
  SortAndFilterViewModel
} from "@app/types/limeroad";
import {
  BottomSheet,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetPortal,
  BottomSheetTitle
} from "@app/ui/components/bottomsheet";
import { Button, ButtonText } from "@app/ui/components/button";
import { Divider } from "@app/ui/components/divider";
import { Icon } from "@app/ui/components/icon";
import { Radio, RadioGroup } from "@app/ui/components/radio";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { XIcon } from "@app/ui/icons/x-icon";
import { cn } from "@app/ui/utils/cn";

type FilterBottomSheetProps = {
  filterOptions: SortAndFilterViewModel["filter_options"];
  onApplyFilters: (filters: FilterParams) => void;
} & ComponentProps<typeof BottomSheet>;

export function FilterBottomSheet({
  open,
  onOpenChange,
  filterOptions,
  onApplyFilters,
  ...props
}: FilterBottomSheetProps) {
  const { height } = Dimensions.get("screen");

  const [selectedFilterType, setSelectedFilterType] = useState(filterOptions[0]);

  const handleFilterChange = (value: string) => {
    const newSelectedFilterType = filterOptions.find((filter) => filter.filter_id === value);

    setSelectedFilterType(newSelectedFilterType);
  };

  const handleApply = () => {
    onApplyFilters({ categories: ["shirt"] });
  };

  const handleOpenChange = (open: boolean) => {
    onOpenChange?.(open);
  };

  return (
    <BottomSheet open={open} onOpenChange={handleOpenChange} {...props}>
      <BottomSheetPortal>
        <BottomSheetContent className="p-0">
          {/* header */}
          <FilterBottomSheetHeader />
          {/* filters */}
          <View className="flex-1 flex-row" style={{ maxHeight: height * 0.7 }}>
            <View className="border-lr-grey-100 w-1/3 border-r">
              <RadioGroup
                value={selectedFilterType?.filter_id}
                onChange={handleFilterChange}
                className="gap-0"
              >
                {filterOptions.map((option) => {
                  const isSelected = selectedFilterType?.filter_id === option.filter_id;

                  return (
                    <Radio key={option.filter_id} value={option.filter_id}>
                      <FilterOption filterOption={option} selected={isSelected} />
                    </Radio>
                  );
                })}
              </RadioGroup>
            </View>
            <View className="flex-1 p-4">
              <Text>filters</Text>
            </View>
          </View>
          {/* buttons */}
          <View className="border-t border-gray-200 px-4 py-5">
            <Button variant="solid" size="lg" action="primary" onPress={handleApply}>
              <ButtonText>Apply</ButtonText>
            </Button>
          </View>
        </BottomSheetContent>
      </BottomSheetPortal>
    </BottomSheet>
  );
}

type FilterOptionProps = {
  filterOption: FilterOptionViewModel;
  selected: boolean;
} & ComponentProps<typeof View>;

const FilterOption = ({ filterOption, selected }: FilterOptionProps) => (
  <View
    className={cn(
      "w-full flex-row items-center gap-1.5 px-2 py-3",
      selected ? "bg-white" : "bg-lr-grey-50"
    )}
  >
    <Divider
      orientation="vertical"
      className={cn("mx-0 h-5 w-[2px] rounded-lg", selected ? "bg-lr-green-400" : "bg-lr-grey-50")}
    />
    <Text className="text-sm font-medium capitalize">{filterOption.label}</Text>
  </View>
);

const FilterBottomSheetHeader = () => (
  <BottomSheetHeader>
    <BottomSheetTitle className="text-lr-grey-800 text-semibold">Filter</BottomSheetTitle>
    <BottomSheetClose className="text-lr-grey-800">
      <Icon as={XIcon} size="2xs" />
    </BottomSheetClose>
  </BottomSheetHeader>
);
