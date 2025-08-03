import type { CreditDto, CreditsSectionDto } from "../dtos";

export interface CreditViewModel extends CreditDto {
  formattedExpiryDate: string;
}

export interface CreditsSectionViewModel extends CreditsSectionDto {
  totalApplicableCredits: number;
  applicableCredits: CreditViewModel[];
  nonApplicableCredits: CreditViewModel[];
}
