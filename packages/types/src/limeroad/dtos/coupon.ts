import type { ISODateString } from "../../common";

export interface CouponInfoDto {
  discount_msg: string;
  condition_msg: string;
  shop_more_link?: string;
  tnc: string[];
}

export interface AppliedInfoDto {
  title: string;
  description?: string;
}

export interface CouponDto {
  id: number;
  code: string;
  expiry_date: ISODateString;
  applicable: boolean;
  applied: boolean;
  coupon_info: CouponInfoDto;
  applied_info: AppliedInfoDto;
}
