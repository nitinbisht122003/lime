import type { ISODateString } from "../../../common";

export interface FaqItem {
  title: string;
  description: string;
  image: string;
}

export interface LrCreditFaq {
  title: string;
  faq_list: FaqItem[];
}

export interface LrCreditInfoDto {
  total_credits: number;
  transferable_credits: number;
  promotional_credits: number;
  tnc: string[];
  shop_link?: string;
  faq: LrCreditFaq;
}

export type CreditAction = "credit" | "debit";

export type CreditStatus = "active" | "expired" | "pending";

export interface SummaryItemDto {
  action: CreditAction;
  title: string;
  subtitle: string;
  date: ISODateString;
  expiry_date: ISODateString;
  amount: number;
  status: CreditStatus;
}

export interface LrCreditSummaryDto {
  title?: string;
  items: SummaryItemDto[];
}
