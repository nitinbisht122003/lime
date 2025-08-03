import type { LrCreditSummaryDto } from "@app/types/limeroad";

export const lrCreditSummary: LrCreditSummaryDto = {
  title: "Summary",
  items: [
    {
      action: "credit",
      title: "Referral Bonus",
      subtitle: "Earned from referral",
      date: "2025-07-01T10:00:00Z",
      expiry_date: "2025-08-01T10:00:00Z",
      amount: 100,
      status: "active"
    },
    {
      action: "debit",
      title: "Purchase",
      subtitle: "Used credits for purchase",
      date: "2025-07-10T12:00:00Z",
      expiry_date: "2025-08-10T12:00:00Z",
      amount: 50,
      status: "active"
    },
    {
      action: "credit",
      title: "Signup Bonus",
      subtitle: "Welcome credits",
      date: "2025-06-01T09:00:00Z",
      expiry_date: "2025-07-01T09:00:00Z",
      amount: 50,
      status: "expired"
    },
    {
      action: "debit",
      title: "Order Payment",
      subtitle: "Used credits for order",
      date: "2025-06-15T11:00:00Z",
      expiry_date: "2025-07-15T11:00:00Z",
      amount: 20,
      status: "expired"
    },
    {
      action: "credit",
      title: "Promo Reward",
      subtitle: "Promotional credits",
      date: "2025-07-05T08:00:00Z",
      expiry_date: "2025-08-05T08:00:00Z",
      amount: 30,
      status: "pending"
    },
    {
      action: "credit",
      title: "Festival Offer",
      subtitle: "Diwali credits",
      date: "2025-10-01T10:00:00Z",
      expiry_date: "2025-11-01T10:00:00Z",
      amount: 150,
      status: "pending"
    },
    {
      action: "debit",
      title: "Cart Checkout",
      subtitle: "Payment from credits",
      date: "2025-07-20T14:00:00Z",
      expiry_date: "2025-08-20T14:00:00Z",
      amount: 70,
      status: "active"
    },
    {
      action: "credit",
      title: "Cashback",
      subtitle: "Credited from offer",
      date: "2025-05-15T09:00:00Z",
      expiry_date: "2025-06-15T09:00:00Z",
      amount: 40,
      status: "expired"
    },
    {
      action: "debit",
      title: "Gift Purchase",
      subtitle: "Used for gifting",
      date: "2025-07-12T13:00:00Z",
      expiry_date: "2025-08-12T13:00:00Z",
      amount: 60,
      status: "active"
    },
    {
      action: "credit",
      title: "Event Promo",
      subtitle: "Special event reward",
      date: "2025-08-05T08:00:00Z",
      expiry_date: "2025-09-05T08:00:00Z",
      amount: 80,
      status: "pending"
    },
    {
      action: "credit",
      title: "Birthday Bonus",
      subtitle: "Credits on your birthday",
      date: "2025-07-23T00:00:00Z",
      expiry_date: "2025-08-23T00:00:00Z",
      amount: 120,
      status: "active"
    },
    {
      action: "debit",
      title: "Express Delivery",
      subtitle: "Delivery service charge",
      date: "2025-07-17T16:00:00Z",
      expiry_date: "2025-08-17T16:00:00Z",
      amount: 10,
      status: "active"
    },
    {
      action: "credit",
      title: "Flash Sale Reward",
      subtitle: "Reward from flash sale",
      date: "2025-06-10T10:30:00Z",
      expiry_date: "2025-07-10T10:30:00Z",
      amount: 25,
      status: "expired"
    },
    {
      action: "debit",
      title: "Wallet Transfer",
      subtitle: "Transferred to another wallet",
      date: "2025-06-25T15:30:00Z",
      expiry_date: "2025-07-25T15:30:00Z",
      amount: 35,
      status: "expired"
    },
    {
      action: "credit",
      title: "Game Contest",
      subtitle: "Won game challenge",
      date: "2025-07-15T11:15:00Z",
      expiry_date: "2025-08-15T11:15:00Z",
      amount: 60,
      status: "active"
    },
    {
      action: "credit",
      title: "App Install Bonus",
      subtitle: "Credits for installing app",
      date: "2025-05-01T09:30:00Z",
      expiry_date: "2025-06-01T09:30:00Z",
      amount: 15,
      status: "expired"
    },
    {
      action: "debit",
      title: "Partial Payment",
      subtitle: "Used part of credits",
      date: "2025-07-19T10:30:00Z",
      expiry_date: "2025-08-19T10:30:00Z",
      amount: 25,
      status: "active"
    },
    {
      action: "credit",
      title: "Top Reviewer Bonus",
      subtitle: "Reward for product review",
      date: "2025-06-20T12:45:00Z",
      expiry_date: "2025-07-20T12:45:00Z",
      amount: 70,
      status: "expired"
    },
    {
      action: "credit",
      title: "New Year Promo",
      subtitle: "Celebration reward",
      date: "2025-01-01T00:00:00Z",
      expiry_date: "2025-02-01T00:00:00Z",
      amount: 100,
      status: "expired"
    },
    {
      action: "debit",
      title: "Subscription Plan",
      subtitle: "Paid using credits",
      date: "2025-07-22T18:00:00Z",
      expiry_date: "2025-08-22T18:00:00Z",
      amount: 90,
      status: "active"
    }
  ]
};
