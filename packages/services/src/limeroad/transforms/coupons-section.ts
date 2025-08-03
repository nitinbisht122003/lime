import type { CouponsSectionDto, CouponsSectionViewModel } from "@app/types/limeroad";

export function transformCouponsSectionDtoToViewModel(
  data: CouponsSectionDto
): CouponsSectionViewModel {
  const { coupons } = data;

  const appliedCoupon = coupons.find((coupon) => coupon.applied);

  return {
    ...data,
    appliedCoupon
  };
}
