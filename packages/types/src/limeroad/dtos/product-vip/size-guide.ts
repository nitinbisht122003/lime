import type { VariantDto } from "../variant";

export type SizeUnit = "cm" | "in";

export interface VariantMap {
  key: string;
  value: Record<SizeUnit, string>;
}

export interface SizeChart {
  headers: {
    label: string;
    key: string;
  }[];
  variant_map: Record<VariantDto["id"], VariantMap[]>;
}

export interface MeasurementGuide {
  image: string;
  description?: string;
}

export interface SizeGuideDto {
  size_chart: SizeChart;
  selectable: boolean;
  measurement_guide?: MeasurementGuide;
}
