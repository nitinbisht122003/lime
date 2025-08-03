import type { BaseFilterItem, TextFilterItem } from "@app/types/limeroad";
import type { IBadgeRailProps } from "@app/ui/components/badge";

export interface RenderFilterItemProps<FilterItem extends BaseFilterItem = TextFilterItem> {
  filter: FilterItem;
  selected: boolean;
  onFilterChange: FilterBadgesProps<FilterItem>["onFilterChange"];
}

export type ItemRenderer<FilterItem extends BaseFilterItem = TextFilterItem> = (
  props: RenderFilterItemProps<FilterItem>
) => React.ReactNode;

export type FilterBadgesProps<FilterItem extends BaseFilterItem = TextFilterItem> =
  IBadgeRailProps & {
    filters: FilterItem[];
    selectedFilter?: FilterItem;
    onFilterChange: (filter: FilterItem) => void;
    renderFilterItem?: ItemRenderer<FilterItem>;
  };
