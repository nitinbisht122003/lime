export type OrderSummaryItemType =
  | "money"
  | "string"
  | "positive_money"
  | "negative_money"
  | "link";

export interface OrderSummaryRowDto {
  type: OrderSummaryItemType;
  name: string;
  name_color?: string;
  value?: number | string;
  value_color?: string;
  key?: string;
  strike_text?: number;
  link?: string;
}

export type OrderSummaryDto = OrderSummaryRowDto[];
