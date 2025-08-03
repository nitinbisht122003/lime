import { Fragment } from "react";

import type { BaseFilterItem, TextFilterItem } from "@app/types/limeroad";
import { Badge, BadgeRail, BadgeText } from "@app/ui/components/badge";

import type { FilterBadgesProps, ItemRenderer } from "./types";

export function FilterBadges<FilterItem extends BaseFilterItem = TextFilterItem>({
  filters,
  selectedFilter,
  onFilterChange,
  renderFilterItem,
  ...props
}: FilterBadgesProps<FilterItem>) {
  if (filters.length === 0) {
    return null;
  }

  return (
    <BadgeRail {...props}>
      {filters.map((filter) => {
        if (renderFilterItem)
          return (
            <Fragment key={filter.id}>
              {renderFilterItem({
                filter,
                selected: filter.id === selectedFilter?.id,
                onFilterChange
              })}
            </Fragment>
          );

        if (
          "label" in filter &&
          "value" in filter &&
          typeof filter.label === "string" &&
          typeof filter.value === "string"
        ) {
          return renderTextFilterItem({
            filter: filter as TextFilterItem,
            selected: filter.id === selectedFilter?.id,
            onFilterChange: onFilterChange as unknown as (f: TextFilterItem) => void
          });
        }

        return null;
      })}
    </BadgeRail>
  );
}

export const renderTextFilterItem: ItemRenderer<TextFilterItem> = ({
  filter,
  selected,
  onFilterChange
}) => {
  return (
    <Badge
      action="default"
      variant="solid"
      size="md"
      active={selected}
      onPress={() => onFilterChange(filter)}
    >
      <BadgeText>{filter.label}</BadgeText>
    </Badge>
  );
};
