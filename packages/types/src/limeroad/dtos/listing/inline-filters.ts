export interface BaseInlineFilterDto {
  type: "flat" | "color";
  label: string;
  url: string;
}

export interface ColorInlineFilterDto extends BaseInlineFilterDto {
  type: "color";
  color: string;
}

export interface FlatInlineFilterDto extends BaseInlineFilterDto {
  type: "flat";
}

export type InlineFilterDto = ColorInlineFilterDto | FlatInlineFilterDto;

export interface InlineFiltersDto {
  filters: InlineFilterDto[];
  view_more: boolean;
}
