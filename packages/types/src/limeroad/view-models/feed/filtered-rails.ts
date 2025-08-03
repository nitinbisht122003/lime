import type {
  BaseFilterItemDto,
  ColorFilterItemDto,
  ColorFilterRailDto,
  TextFilterItemDto
} from "../../dtos";

export type BaseFilterItem = BaseFilterItemDto;

export type TextFilterItem = TextFilterItemDto;

export interface ColorFilterRailViewModel extends Omit<ColorFilterRailDto, "defaultFilterId"> {
  defaultFilter?: ColorFilterItemDto;
}
