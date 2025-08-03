import { isEmpty } from "@app/core/utils";

import { AbstractService } from "../models/abstract-service";

export interface ApplyCouponResponse {
  success: boolean;
  message?: string;
}

export interface RemoveCouponResponse {
  success: boolean;
  message?: string;
}

class CouponServiceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CouponServiceError";
  }
}

class CouponService extends AbstractService {
  private static instance: CouponService | null = null;

  private constructor() {
    super();
    // Private constructor to prevent instantiation
    // from outside the class
  }

  static getInstance(): CouponService {
    CouponService.instance ??= new CouponService();

    return CouponService.instance;
  }

  async applyCoupon(couponCode: string): Promise<ApplyCouponResponse> {
    if (isEmpty(couponCode)) {
      throw new CouponServiceError("Coupon code cannot be empty");
    }

    const response = await this.getApiClient().post<ApplyCouponResponse>("coupon/apply", {
      coupon_code: couponCode
    });

    return response;
  }

  async removeCoupon(couponCode: string): Promise<RemoveCouponResponse> {
    if (isEmpty(couponCode)) {
      throw new CouponServiceError("Coupon code cannot be empty");
    }

    const response = await this.getApiClient().post<RemoveCouponResponse>("coupon/remove", {
      coupon_code: couponCode
    });

    return response;
  }
}

export const couponService = CouponService.getInstance();
