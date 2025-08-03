import type { ISODateString } from "../../../common";
import type { ServiceabilityDto } from "../address";
import type { CustomerPromisesDto } from "./customer-promises";

export interface EddCheckerDto {
  product_id: string;
  pincode?: number;
  serviceability?: ServiceabilityDto;
  edd?: ISODateString; // Estimated Delivery Date
  defaulteddText?: string;
  promises?: CustomerPromisesDto;
}
