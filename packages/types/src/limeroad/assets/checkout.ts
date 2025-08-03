import type {
  AddressSelectorDto,
  CheckoutBagItemsDto,
  CouponsSectionDto,
  CreditsSectionDto,
  OrderSummaryDto,
  PaymentsSectionDto
} from "../dtos";
import type {
  AddressSelectorViewModel,
  CheckoutBagItemsViewModel,
  CouponsSectionViewModel,
  CreditsSectionViewModel,
  OrderSummaryViewModel,
  PaymentsSectionViewModel
} from "../view-models";
import type { CommonAssetPayloadMap, CommonAssetType } from "./common";

export type CheckoutAssetType =
  | CommonAssetType
  | "address_selector"
  | "bag_items"
  | "coupons_section"
  | "credits_section"
  | "payment_section"
  | "summary"
  | "trust_section"
  | "checkout_action";

export interface CheckoutAssetPayloadMap extends CommonAssetPayloadMap {
  address_selector: {
    dto: AddressSelectorDto;
    view_model: AddressSelectorViewModel;
  };
  bag_items: {
    dto: CheckoutBagItemsDto;
    view_model: CheckoutBagItemsViewModel;
  };
  coupons_section: {
    dto: CouponsSectionDto;
    view_model: CouponsSectionViewModel;
  };
  credits_section: {
    dto: CreditsSectionDto;
    view_model: CreditsSectionViewModel;
  };
  payment_section: {
    dto: PaymentsSectionDto;
    view_model: PaymentsSectionViewModel;
  };
  summary: {
    dto: OrderSummaryDto;
    view_model: OrderSummaryViewModel;
  };
  trust_section: {
    dto: unknown;
    view_model: unknown;
  };
  checkout_action: {
    dto: unknown;
    view_model: unknown;
  };
}
