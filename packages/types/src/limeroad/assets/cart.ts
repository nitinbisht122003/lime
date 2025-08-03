import type {
  AddressSelectorDto,
  CartItemDto,
  CheckoutActionDto,
  CouponsSectionDto,
  GoldPitchDto,
  OrderSummaryDto
} from "../dtos";
import type {
  AddressSelectorViewModel,
  CartItemViewModel,
  CheckoutActionViewModel,
  CouponsSectionViewModel,
  GoldPitchViewModel
} from "../view-models";
import type { OrderSummaryViewModel } from "../view-models/order-summary";
import type { CommonAssetPayloadMap, CommonAssetType } from "./common";

export type CartAssetType =
  | CommonAssetType
  | "address_selector"
  | "cart_item"
  | "gold_pitch"
  | "coupons_section"
  | "credits"
  | "summary"
  | "checkout_action";

export interface CartAssetPayloadMap extends CommonAssetPayloadMap {
  address_selector: {
    dto: AddressSelectorDto;
    view_model: AddressSelectorViewModel;
  };
  cart_item: {
    dto: CartItemDto;
    view_model: CartItemViewModel;
  };
  credits: {
    dto: unknown;
    view_model: unknown;
  };
  coupons_section: {
    dto: CouponsSectionDto;
    view_model: CouponsSectionViewModel;
  };
  summary: {
    dto: OrderSummaryDto;
    view_model: OrderSummaryViewModel;
  };
  gold_pitch: {
    dto: GoldPitchDto;
    view_model: GoldPitchViewModel;
  };
  checkout_action: {
    dto: CheckoutActionDto;
    view_model: CheckoutActionViewModel;
  };
}
