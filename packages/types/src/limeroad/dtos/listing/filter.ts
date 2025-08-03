export type FilterParams = Record<string, string | string[]>;

export interface FilterRequestDto {
  filter_id: string;
}

export interface FilterValueDto {
  label: string;
  value: string;
  selected: boolean;
}

export interface FilterValuesDto {
  filters: FilterValueDto[];
}
