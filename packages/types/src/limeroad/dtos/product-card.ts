import type { ProductDto } from "./product";
import type { SiblingDto } from "./sibling";

export interface ProductCardDto extends ProductDto {
  mrp: number;
  selling_price: number;
  siblings?: SiblingDto[];
}
