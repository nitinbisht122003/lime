"use client";

import { useState } from "react";

import type { FilterParams, SortOptionViewModel } from "@app/types/limeroad";
import { sortandFilter } from "@app/services/limeroad/mocks/sort-and-filter";
import { Button, ButtonText } from "@app/ui/components/button";
import { Divider } from "@app/ui/components/divider";
import { Icon } from "@app/ui/components/icon";
import { View } from "@app/ui/elements/view";
import { FilterIcon } from "@app/ui/icons/filter-icon";
import { SortIcon } from "@app/ui/icons/sort-icon";

import { FilterBottomSheet } from "./filter-bottomsheet";
import { SortBottomSheet } from "./sort-bottomsheet";

export const SortAndFilter = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState<string>();

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSortClick = () => {
    setIsSortOpen(true);
  };

  const handleFilterClick = () => {
    setIsFilterOpen(true);
  };

  const handleSortSelect = (sort: SortOptionViewModel) => {
    setSelectedSort(sort.filter);
    setIsSortOpen(false);
  };

  const handleApplyFilters = (filters: FilterParams) => {
    // Handle the filter application logic here
    console.log("Applied Filters:", filters);
    setIsFilterOpen(false);
  };

  return (
    <>
      <View className="border-lr-grey-300 w-full flex-row items-center rounded-lg border-t bg-white p-1">
        <Button
          variant="solid"
          action="default"
          onPress={handleSortClick}
          className="flex-1 items-center justify-center gap-2"
        >
          <Icon as={SortIcon} size="sm" className="text-lr-grey-800" />
          <ButtonText>Sort</ButtonText>
        </Button>

        <Divider orientation="vertical" className="bg-lr-grey-300 h-5" />

        <Button
          variant="solid"
          action="default"
          onPress={handleFilterClick}
          className="flex-1 items-center justify-center gap-2"
        >
          <Icon as={FilterIcon} size="sm" className="text-lr-grey-800" />
          <ButtonText>Filter</ButtonText>
        </Button>
      </View>

      <SortBottomSheet
        open={isSortOpen}
        onOpenChange={setIsSortOpen}
        sortOptions={sortandFilter.sort_options}
        selectedSort={selectedSort}
        onSelectSort={handleSortSelect}
      />

      <FilterBottomSheet
        open={isFilterOpen}
        onOpenChange={setIsFilterOpen}
        filterOptions={sortandFilter.filter_options}
        onApplyFilters={handleApplyFilters}
      />
    </>
  );
};
