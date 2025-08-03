import type {
  CheckoutAssetDto,
  CheckoutAssetViewModel,
  CheckoutDataDto,
  CheckoutDataViewModel
} from "@app/types/limeroad";

import { transformAddressSelectorDtoToViewModel } from "../address-selector";
import { transformCouponsSectionDtoToViewModel } from "../coupons-section";
import { transformCreditsSectionDtoToViewModel } from "../credits-section";
import { transformCheckoutBagItemsDtoToViewModel } from "./bag-items";

export const transformCheckoutDataDtoToViewModel = (
  checkoutDataDto: CheckoutDataDto
): CheckoutDataViewModel => {
  const { items, meta } = checkoutDataDto;

  return {
    items: items.map(transformItemDtoToViewModel),
    meta
  };
};

const transformItemDtoToViewModel = (itemDto: CheckoutAssetDto): CheckoutAssetViewModel => {
  switch (itemDto.type) {
    case "address_selector":
      return {
        ...itemDto,
        payload: transformAddressSelectorDtoToViewModel(itemDto.payload)
      };
    case "bag_items":
      return {
        ...itemDto,
        payload: transformCheckoutBagItemsDtoToViewModel(itemDto.payload)
      };
    case "coupons_section":
      return {
        ...itemDto,
        payload: transformCouponsSectionDtoToViewModel(itemDto.payload)
      };
    case "credits_section":
      return {
        ...itemDto,
        payload: transformCreditsSectionDtoToViewModel(itemDto.payload)
      };
    default:
      return itemDto;
  }
};
