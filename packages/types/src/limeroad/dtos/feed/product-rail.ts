import type { ProductCardDto } from "../product-card";

export interface ProductRailDto {
  products: ProductCardDto[];
  title?: string;
  link?: {
    label: string;
    url: string;
  };
}
