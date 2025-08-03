import type {
  ProductVipAssetDto,
  ProductVipAssetViewModel,
  ProductVipDataViewModel,
  ProductVipDto
} from "@app/types/limeroad";

export const transformProductVipDataDtoToViewModel = (
  data: ProductVipDto
): ProductVipDataViewModel => {
  const { items, meta } = data;

  return {
    items: items.map(transformItemDtoToViewModel),
    meta
  };
};

const transformItemDtoToViewModel = (itemDto: ProductVipAssetDto): ProductVipAssetViewModel => {
  switch (itemDto.type) {
    case "product_gallery":
    case "product_info":
    case "product_details":
    case "size_selector":
    case "sibling_selector":
    case "edd_checker":
    default:
      // For now all other view models are identical to DTOs
      return itemDto;
  }
};
