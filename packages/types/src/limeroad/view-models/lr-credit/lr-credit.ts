import type {
  LrCreditInfoDto,
  LrCreditSummaryDto,
  SummaryItemDto
} from "../../dtos/lr-credit/lr-credit";

export type LrCreditInfoViewModel = LrCreditInfoDto;

export interface SummaryItemViewModel extends SummaryItemDto {
  formattedDate: string;
  formattedExpiryDate: string;
}

export interface LrCreditSummaryViewModel extends Omit<LrCreditSummaryDto, "items"> {
  items: SummaryItemViewModel[];
}
