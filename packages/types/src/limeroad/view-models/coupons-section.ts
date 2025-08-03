import type { CouponDto, CouponsSectionDto } from "../dtos";

export type CouponsSectionViewModel = CouponsSectionDto & {
  appliedCoupon?: CouponDto;
};
