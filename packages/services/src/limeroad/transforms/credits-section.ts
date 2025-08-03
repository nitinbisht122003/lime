import type { CreditsSectionDto, CreditsSectionViewModel } from "@app/types/limeroad";
import { dayjs } from "@app/core/utils";

export const transformCreditsSectionDtoToViewModel = (
  dto: CreditsSectionDto
): CreditsSectionViewModel => {
  const { credits, ...rest } = dto;

  const viewModelCredits = credits.map((credit) => ({
    ...credit,
    formattedExpiryDate: dayjs(credit.expiry_date).format("DD MMM YYYY, hh:mm A")
  }));

  const applicableCredits = viewModelCredits.filter((credit) => credit.applicable);
  const nonApplicableCredits = viewModelCredits.filter((credit) => !credit.applicable);

  const totalApplicableCredits = applicableCredits.reduce((acc, credit) => acc + credit.amount, 0);

  return {
    ...rest,
    credits,
    totalApplicableCredits,
    applicableCredits,
    nonApplicableCredits
  };
};
