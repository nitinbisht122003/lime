import type { CartItemDto, CartItemViewModel } from "@app/types/limeroad";
import { dayjs } from "@app/core/utils";

import { calculateDiscountPercent } from "../utils";

export function transformCartItemDtoToViewModel(cartItemDto: CartItemDto): CartItemViewModel {
  const {
    id,
    product_id,
    name,
    brand,
    url,
    image,
    selling_price,
    mrp,
    quantity,
    offers,
    delivery_date,
    availability,
    variants,
    variant_id
  } = cartItemDto;

  const sizeOptions = variants.map((variant) => ({
    label: variant.size,
    value: variant.id,
    disabled: variant.availability === 0
  }));

  const maxQty = Math.min(5, availability);

  const qtyOptions = Array.from({ length: maxQty }, (_, i) => ({
    label: (i + 1).toString(),
    value: (i + 1).toString()
  }));

  const selectedSize = sizeOptions.find((option) => option.value === variant_id);

  const selectedQty = qtyOptions.find((option) => option.value === quantity.toString());

  return {
    id,
    product_id,
    name,
    brand,
    url,
    image,
    totalPrice: selling_price * quantity,
    totalMRP: mrp * quantity,
    discountPercent: calculateDiscountPercent(mrp, selling_price),
    sizeOOS: availability === 0,
    allSizeOOS: variants.every((variant) => variant.availability === 0),
    bestOffer: offers?.[0],
    formattedDeliveryDate: delivery_date ? dayjs(delivery_date).format("ddd, DD MMM") : undefined,
    sizeOptions,
    qtyOptions,
    selectedSize,
    selectedQty
  };
}
