import type { ProductCardDto } from "./product-card";
import type { GridLayoutData } from "../../common";

export interface ProductWithLayoutDto {
  product: ProductCardDto;
  layout: GridLayoutData;
}

export interface ProductAnglesSectionDto {
  title: string;
  products: ProductWithLayoutDto[];
}