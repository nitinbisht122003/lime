import type { CreditDto } from "@app/types/limeroad";

export const credits: CreditDto[] = [
  {
    type: "cashback",
    amount: 100,
    expiry_date: "2024-12-31T23:59:59Z",
    applicable: true,
    applicable_percentage: 10
  },
  {
    type: "cashback",
    amount: 100,
    expiry_date: "2024-12-31T23:59:59Z",
    applicable: true
  },
  {
    type: "discount",
    amount: 100,
    expiry_date: "2024-12-31T23:59:59Z",
    applicable: false
  },
  {
    type: "contacts_sync",
    amount: 100,
    expiry_date: "2024-12-31T23:59:59Z",
    applicable: false
  }
];
