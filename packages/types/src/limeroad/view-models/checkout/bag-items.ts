import type { CheckoutBagItemDto, CheckoutBagItemsDto } from "../../dtos";

export interface CheckoutBagItemViewModel extends CheckoutBagItemDto {
  totalPrice: number;
  totalMRP: number;
  discountPercent: number;
  formattedDeliveryDate: string | undefined;
}

export interface CheckoutBagItemsViewModel extends CheckoutBagItemsDto {
  items: CheckoutBagItemViewModel[];
}
