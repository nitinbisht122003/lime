export interface BasePriceSliderDto {
  type: "single" | "double";
  min: number;
  max: number;
  step: number;
}

export interface SinglePriceSliderDto extends BasePriceSliderDto {
  type: "single";
  value: number;
}

export interface DoublePriceSliderDto extends BasePriceSliderDto {
  type: "double";
  value: {
    min: number;
    max: number;
  };
}

export type PriceSliderDto = SinglePriceSliderDto | DoublePriceSliderDto;
