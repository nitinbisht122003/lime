import type { ProductCardDto } from "../product-card";

export interface BaseFilterItemDto {
  id: string;
}

export interface TextFilterItemDto extends BaseFilterItemDto {
  label: string;
  value: string;
}

export interface ColorFilterItemDto extends BaseFilterItemDto {
  label: string;
  color: string;
}

export interface ColorFilterRailDto {
  title?: string;
  subtitle?: string;
  filters: ColorFilterItemDto[];
  defaultFilterId: ColorFilterItemDto["id"];
  products: ProductCardDto[];
}
