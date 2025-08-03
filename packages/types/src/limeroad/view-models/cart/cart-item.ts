import type { CartItemDto, CartItemOfferDto } from "../../dtos";
import type { Option } from "../option";

export type CartItemViewModel = Pick<
  CartItemDto,
  "id" | "product_id" | "name" | "brand" | "url" | "image"
> & {
  totalPrice: number;
  totalMRP: number;
  discountPercent: number;
  sizeOOS: boolean;
  allSizeOOS: boolean;
  bestOffer: CartItemOfferDto | undefined;
  formattedDeliveryDate: string | undefined;
  sizeOptions: Option[];
  qtyOptions: Option[];
  selectedSize: Option | undefined;
  selectedQty: Option | undefined;
};
