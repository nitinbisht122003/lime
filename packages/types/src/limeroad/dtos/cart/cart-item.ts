import type { Href, ISODateString } from "../../../common";
import type { ProductDto } from "../product";
import type { VariantDto } from "../variant";

export interface CartItemOfferDto {
  offer: string;
  message: string;
}

export interface CartItemDto {
  id: number;
  product_id: ProductDto["id"];
  name: string;
  brand: string;
  url: Href;
  image: Href;
  mrp: number;
  selling_price: number;
  quantity: number;
  availability: number;
  variant_id: VariantDto["id"];
  variants: VariantDto[];
  delivery_date?: ISODateString;
  offers?: CartItemOfferDto[];
}
