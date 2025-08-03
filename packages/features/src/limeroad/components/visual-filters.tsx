"use client";

import type { ComponentProps } from "react";

import type { VisualFilterViewModel } from "@app/types/limeroad";
import {
  VisualFilterActiveIndicator,
  VisualFilterContent,
  VisualFilterGroup,
  VisualFilterImage,
  VisualFilterText,
  VisualFilter as VisualFilterUI
} from "@app/ui/components/visual-filter";

type VisualFiltersProps = ComponentProps<typeof VisualFilterGroup> & {
  visualFilters: VisualFilterViewModel[];
  selectedFilter?: VisualFilterViewModel;
  onFilterChange?: (visualFilter: VisualFilterViewModel) => void;
};

export function VisualFilters({
  visualFilters,
  selectedFilter,
  onFilterChange,
  ...props
}: VisualFiltersProps) {
  return (
    <VisualFilterGroup spacing="sm" {...props}>
      {visualFilters.map((filter) => (
        <VisualFilterUI key={filter.id} size="md" onPress={() => onFilterChange?.(filter)}>
          <VisualFilterImage src={filter.image} alt={filter.title} />
          <VisualFilterContent>
            <VisualFilterText>{filter.title}</VisualFilterText>
            {selectedFilter?.id === filter.id && <VisualFilterActiveIndicator className="mt-1" />}
          </VisualFilterContent>
        </VisualFilterUI>
      ))}
    </VisualFilterGroup>
  );
}
