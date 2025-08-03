import type {
  CartAssetDto,
  CartAssetViewModel,
  CartDataDto,
  CartDataViewModel
} from "@app/types/limeroad";

import { transformAddressSelectorDtoToViewModel } from "../address-selector";
import { transformCouponsSectionDtoToViewModel } from "../coupons-section";
import { transformCartItemDtoToViewModel } from "./cart-item";

export const transformCartDataDtoToViewModel = (cartDataDto: CartDataDto): CartDataViewModel => {
  const { items, meta } = cartDataDto;

  return {
    items: items.map(transformItemDtoToViewModel),
    meta
  };
};

const transformItemDtoToViewModel = (itemDto: CartAssetDto): CartAssetViewModel => {
  switch (itemDto.type) {
    case "cart_item":
      return {
        ...itemDto,
        payload: transformCartItemDtoToViewModel(itemDto.payload)
      };
    case "address_selector":
      return {
        ...itemDto,
        payload: transformAddressSelectorDtoToViewModel(itemDto.payload)
      };
    case "coupons_section":
      return {
        ...itemDto,
        payload: transformCouponsSectionDtoToViewModel(itemDto.payload)
      };
    default:
      return itemDto;
  }
};
