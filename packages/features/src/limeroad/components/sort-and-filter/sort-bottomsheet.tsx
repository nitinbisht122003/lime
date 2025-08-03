"use client";

import type { ComponentProps } from "react";
import { Fragment } from "react";

import type { SortAndFilterViewModel, SortOptionViewModel } from "@app/types/limeroad";
import {
  BottomSheet,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetPortal,
  BottomSheetTitle
} from "@app/ui/components/bottomsheet";
import { Divider } from "@app/ui/components/divider";
import { Icon } from "@app/ui/components/icon";
import { Radio, RadioGroup } from "@app/ui/components/radio";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { XIcon } from "@app/ui/icons/x-icon";
import { cn } from "@app/ui/utils/cn";

type SortBottomSheetProps = {
  sortOptions: SortAndFilterViewModel["sort_options"];
  selectedSort?: string;
  onSelectSort: (sort: SortOptionViewModel) => void;
} & ComponentProps<typeof BottomSheet>;

export function SortBottomSheet({
  open,
  onOpenChange,
  sortOptions,
  selectedSort,
  onSelectSort,
  ...props
}: SortBottomSheetProps) {
  const handleSortChange = (value: string) => {
    const selectedOption = sortOptions.find((option) => option.filter === value);

    if (selectedOption) {
      onSelectSort(selectedOption);
    }
  };

  return (
    <BottomSheet open={open} onOpenChange={onOpenChange} {...props}>
      <BottomSheetPortal>
        <BottomSheetContent className="p-0">
          <SortBottomSheetHeader />
          <View className="bg-white px-4 py-5">
            <RadioGroup value={selectedSort} onChange={handleSortChange} className="gap-4">
              {sortOptions.map((option, index) => {
                const isSelected = selectedSort === option.filter;

                return (
                  <Fragment key={option.filter}>
                    {index > 0 && <Divider className="bg-lr-grey-300 my-0" />}
                    <Radio value={option.filter}>
                      <Text
                        className={cn(
                          "pl-1 text-sm font-medium",
                          isSelected ? "text-lr-grey-950" : "text-lr-grey-600"
                        )}
                      >
                        {option.label}
                      </Text>
                    </Radio>
                  </Fragment>
                );
              })}
            </RadioGroup>
          </View>
        </BottomSheetContent>
      </BottomSheetPortal>
    </BottomSheet>
  );
}

const SortBottomSheetHeader = () => (
  <BottomSheetHeader>
    <BottomSheetTitle className="text-lr-grey-800 text-semibold">Sort</BottomSheetTitle>
    <BottomSheetClose className="text-lr-grey-800">
      <Icon as={XIcon} size="2xs" className="text-lr-grey-800" />
    </BottomSheetClose>
  </BottomSheetHeader>
);
