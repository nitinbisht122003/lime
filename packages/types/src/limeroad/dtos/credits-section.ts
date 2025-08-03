import type { ISODateString } from "../../common";

export interface CreditDto {
  type: string;
  amount: number;
  expiry_date: ISODateString;
  applicable: boolean;
  applicable_percentage?: number;
}

export interface CreditsSectionDto {
  title: string;
  applied?: boolean;
  credits: CreditDto[];
}
