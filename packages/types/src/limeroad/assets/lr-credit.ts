import type { PaginationDto } from "../dtos";
import type { LrCreditInfoDto, LrCreditSummaryDto } from "../dtos/lr-credit/lr-credit";
import type { PaginationViewModel } from "../view-models";
import type {
  LrCreditInfoViewModel,
  LrCreditSummaryViewModel
} from "../view-models/lr-credit/lr-credit";
import type { CommonAssetPayloadMap, CommonAssetType } from "./common";

export type LrCreditAssetType =
  | CommonAssetType
  | "lr_credit_info"
  | "lr_credit_summary"
  | "pagination";

export interface LrCreditAssetPayloadMap extends CommonAssetPayloadMap {
  lr_credit_info: {
    dto: LrCreditInfoDto;
    view_model: LrCreditInfoViewModel;
  };
  lr_credit_summary: {
    dto: LrCreditSummaryDto;
    view_model: LrCreditSummaryViewModel;
  };
  pagination: {
    dto: PaginationDto<LrCreditAssetType>;
    view_model: PaginationViewModel<LrCreditAssetType>;
  };
}
