import type { CouponsSectionDto } from "@app/types/limeroad";

import { coupons } from "./coupon";

export const couponsSection: CouponsSectionDto = {
  title: "Coupons",
  coupons: coupons
};
