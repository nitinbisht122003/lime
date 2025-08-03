import type { Href, ISODateString } from "../../../common";

export interface CheckoutBagItemDto {
  id: number;
  name: string;
  url: Href;
  image: Href;
  mrp: number;
  selling_price: number;
  size: string;
  quantity: number;
  delivery_date?: ISODateString;
}

export interface CheckoutBagItemsDto {
  items: CheckoutBagItemDto[];
}
