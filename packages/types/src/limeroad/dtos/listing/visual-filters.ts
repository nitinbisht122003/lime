import type { FlatFilterDto } from "./flat-filters";

export type ListingVisualFilterDto = FlatFilterDto & {
  image: string;
};

export interface ListingVisualFiltersDto {
  filters: ListingVisualFilterDto[];
}
