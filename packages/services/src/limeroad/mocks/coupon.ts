import type { CouponDto } from "@app/types/limeroad";

export const coupons: CouponDto[] = [
  {
    id: 1,
    code: "WELCOME50",
    expiry_date: "2024-12-31T23:59:59Z",
    applicable: true,
    applied: false,
    coupon_info: {
      discount_msg: "Get 50% off on your first purchase",
      condition_msg: "Valid on orders above ₹999",
      tnc: [
        "Valid only on first purchase",
        "Cannot be combined with other offers",
        "Valid on full-priced items only"
      ]
    },
    applied_info: {
      title: "Welcome Offer",
      description: "50% off on first purchase"
    }
  },
  {
    id: 2,
    code: "SUMMER25",
    expiry_date: "2024-08-31T23:59:59Z",
    applicable: true,
    applied: true,
    coupon_info: {
      discount_msg: "Get 25% off on summer collection",
      condition_msg: "Valid on orders above ₹1499",
      tnc: [
        "Valid on summer collection only",
        "Maximum discount of ₹1000",
        "Not applicable on sale items"
      ]
    },
    applied_info: {
      title: "Summer Special",
      description: "25% off on summer collection"
    }
  },
  {
    id: 3,
    code: "FLAT100",
    expiry_date: "2024-03-15T23:59:59Z",
    applicable: true,
    applied: false,
    coupon_info: {
      discount_msg: "Flat ₹100 off on your order",
      condition_msg: "Valid on orders above ₹500",
      tnc: ["One-time use only", "Valid on all categories", "Cannot be combined with other offers"]
    },
    applied_info: {
      title: "Flat Discount",
      description: "₹100 off on your order"
    }
  },
  {
    id: 4,
    code: "EXPIRED30",
    expiry_date: "2024-02-29T23:59:59Z",
    applicable: true,
    applied: false,
    coupon_info: {
      discount_msg: "Get 30% off on your purchase",
      condition_msg: "Valid on orders above ₹2000",
      tnc: ["Valid on all categories", "Maximum discount of ₹2000", "Not applicable on sale items"]
    },
    applied_info: {
      title: "Special Discount",
      description: "30% off on your purchase"
    }
  },
  {
    id: 5,
    code: "FLASH40",
    expiry_date: "2024-06-30T23:59:59Z",
    applicable: false,
    applied: false,
    coupon_info: {
      discount_msg: "Flash sale! Get 40% off",
      condition_msg: "Valid on orders above ₹1999",
      tnc: [
        "Limited time offer",
        "Valid on selected items only",
        "Cannot be combined with other offers"
      ]
    },
    applied_info: {
      title: "Flash Sale",
      description: "40% off on selected items"
    }
  },
  {
    id: 6,
    code: "FLASH60",
    expiry_date: "2024-06-30T23:59:59Z",
    applicable: false,
    applied: false,
    coupon_info: {
      discount_msg: "Flash sale! Get 40% off",
      condition_msg: "Valid on orders above ₹1999",
      tnc: [
        "Limited time offer",
        "Valid on selected items only",
        "Cannot be combined with other offers"
      ]
    },
    applied_info: {
      title: "Flash Sale",
      description: "40% off on selected items"
    }
  },
  {
    id: 7,
    code: "FLASH80",
    expiry_date: "2024-06-30T23:59:59Z",
    applicable: false,
    applied: false,
    coupon_info: {
      discount_msg: "Flash sale! Get 40% off",
      condition_msg: "Valid on orders above ₹1999",
      tnc: [
        "Limited time offer",
        "Valid on selected items only",
        "Cannot be combined with other offers"
      ]
    },
    applied_info: {
      title: "Flash Sale",
      description: "40% off on selected items"
    }
  }
];
