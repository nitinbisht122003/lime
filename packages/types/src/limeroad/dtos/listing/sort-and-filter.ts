export interface SortOptionDto {
  label: string;
  filter: string;
}

export interface FilterOptionDto {
  label: string;
  filter_id: string;
}

export interface SortAndFilterDto {
  sort_options: SortOptionDto[];
  filter_options: FilterOptionDto[];
}
