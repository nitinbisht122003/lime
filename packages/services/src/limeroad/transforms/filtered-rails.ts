import type { ColorFilterRailDto, ColorFilterRailViewModel } from "@app/types/limeroad";

export const transformColorFilterRailDtoToViewModel = (
  data: ColorFilterRailDto
): ColorFilterRailViewModel => {
  const { filters, defaultFilterId, ...rest } = data;

  const defaultFilter = filters.find((filter) => filter.id === defaultFilterId);

  return {
    ...rest,
    filters,
    defaultFilter: defaultFilter
  };
};
