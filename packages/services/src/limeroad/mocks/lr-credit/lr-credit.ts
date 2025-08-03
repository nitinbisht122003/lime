import type { LrCreditInfoDto } from "@app/types/limeroad";

export const lrCreditInfo: LrCreditInfoDto = {
  total_credits: 700,
  transferable_credits: 500,
  promotional_credits: 200,
  tnc: [
    "Terms and conditions apply. Credits are non-transferable and valid for 6 months.",
    "Credits can be used for purchases on the Limeroad platform only.",
    "Unused credits will expire after the validity period.",
    "Credits cannot be redeemed for cash or any other form of payment."
  ],
  shop_link: "/shop/credits",
  faq: {
    title: "LR Credits FAQ",
    faq_list: [
      {
        title: "Offline Store",
        description: "LR Credits can be used at self checkout",
        image: "https://img3.junaroad.com/images/icons/offline_mode.png"
      },
      {
        title: "Online Store",
        description: "LR Credits can be used for online orders",
        image: "https://img3.junaroad.com/images/icons/online_mode.png"
      }
    ]
  }
};
