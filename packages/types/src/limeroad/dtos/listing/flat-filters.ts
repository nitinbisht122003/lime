import type { FilterParams } from "./filter";

export interface BaseFlatFilterDto {
  label: string;
  selected: boolean;
}

export interface UrlFlatFilterDto extends BaseFlatFilterDto {
  url: string;
}

export interface ParamsFlatFilterDto extends BaseFlatFilterDto {
  filter_params: FilterParams;
}

export type FlatFilterDto = UrlFlatFilterDto | ParamsFlatFilterDto;

export interface FlatFiltersDto {
  filters: FlatFilterDto[];
}
