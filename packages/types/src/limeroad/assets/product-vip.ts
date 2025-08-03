import type {
  EddCheckerDto,
  PaginationDto,
  ProductDetailsDto,
  ProductGalleryDto,
  ProductInfoDto,
  SiblingSelectorDto,
  SimilarRailDto,
  SizeSelectorDto,
  VipActionsDto
} from "../dtos";
import type {
  EddCheckerViewModel,
  PaginationViewModel,
  ProductDetailsViewModel,
  ProductGalleryViewModel,
  ProductInfoViewModel,
  SiblingSelectorViewModel,
  SimilarRailViewModel,
  SizeSelectorViewModel,
  VipActionsViewModel
} from "../view-models";
import type { CommonAssetPayloadMap, CommonAssetType } from "./common";

export type ProductVipAssetType =
  | CommonAssetType
  | "product_gallery"
  | "product_info"
  | "size_selector"
  | "sibling_selector"
  | "edd_checker"
  | "product_details"
  | "vip_action"
  | "similar_rail"
  | "pagination";

export interface ProductVipAssetPayloadMap extends CommonAssetPayloadMap {
  product_gallery: {
    dto: ProductGalleryDto;
    view_model: ProductGalleryViewModel;
  };
  product_info: {
    dto: ProductInfoDto;
    view_model: ProductInfoViewModel;
  };
  sibling_selector: {
    dto: SiblingSelectorDto;
    view_model: SiblingSelectorViewModel;
  };
  size_selector: {
    dto: SizeSelectorDto;
    view_model: SizeSelectorViewModel;
  };
  edd_checker: {
    dto: EddCheckerDto;
    view_model: EddCheckerViewModel;
  };
  product_details: {
    dto: ProductDetailsDto;
    view_model: ProductDetailsViewModel;
  };
  vip_action: {
    dto: VipActionsDto;
    view_model: VipActionsViewModel;
  };
  similar_rail: {
    dto: SimilarRailDto;
    view_model: SimilarRailViewModel;
  };
  pagination: {
    dto: PaginationDto<ProductVipAssetType>;
    view_model: PaginationViewModel<ProductVipAssetType>;
  };
}
