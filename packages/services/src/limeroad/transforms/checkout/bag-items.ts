import type {
  CheckoutBagItemDto,
  CheckoutBagItemsDto,
  CheckoutBagItemsViewModel,
  CheckoutBagItemViewModel
} from "@app/types/limeroad";
import { dayjs } from "@app/core/utils";

import { calculateDiscountPercent } from "../utils";

export function transformCheckoutBagItemDtoToViewModel(
  bagItemDto: CheckoutBagItemDto
): CheckoutBagItemViewModel {
  const { quantity, mrp, selling_price, delivery_date } = bagItemDto;

  return {
    ...bagItemDto,
    totalPrice: selling_price * quantity,
    totalMRP: mrp * quantity,
    discountPercent: calculateDiscountPercent(mrp, selling_price),
    formattedDeliveryDate: delivery_date ? dayjs(delivery_date).format("ddd, DD MMM") : undefined
  };
}

export function transformCheckoutBagItemsDtoToViewModel(
  bagItemsDto: CheckoutBagItemsDto
): CheckoutBagItemsViewModel {
  return {
    ...bagItemsDto,
    items: bagItemsDto.items.map(transformCheckoutBagItemDtoToViewModel)
  };
}
