import type {
  LrCreditAssetDto,
  LrCreditAssetViewModel,
  LrCreditDataDto,
  LrCreditDataViewModel,
  SummaryItemDto,
  SummaryItemViewModel
} from "@app/types/limeroad";
import { dayjs } from "@app/core/utils";

export const transformLrCreditDtoToViewModel = (dto: LrCreditDataDto): LrCreditDataViewModel => {
  const { items, meta } = dto;

  return {
    items: items.map(transformLrCreditItemToViewModel),
    meta
  };
};

const transformLrCreditItemToViewModel = (itemDto: LrCreditAssetDto): LrCreditAssetViewModel => {
  const { type, payload } = itemDto;

  switch (type) {
    case "lr_credit_info":
      return {
        type,
        payload: payload
      };
    case "lr_credit_summary":
      return {
        type,
        payload: {
          ...payload,
          items: payload.items.map(transformLrCreditSummaryItemDtoToViewModel)
        }
      };
    default:
      return itemDto;
  }
};

export const transformLrCreditSummaryItemDtoToViewModel = (
  itemDto: SummaryItemDto
): SummaryItemViewModel => {
  const { date, expiry_date } = itemDto;

  return {
    ...itemDto,
    formattedDate: dayjs(date).format("MMM DD, hh:mm A"),
    formattedExpiryDate: dayjs(expiry_date).format("MMM DD, hh:mm A")
  };
};
