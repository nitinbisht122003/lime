export type AddressType = "home" | "office" | "other";

export interface ServiceabilityDto {
  status_code: 0 | 1 | 3; // 0: not serviceable, 1: prepaid only, 3: serviceable
  status_message: string;
}

export interface AddressDto {
  id: number;
  type: AddressType;
  first_name: string;
  last_name: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  mobile: string;
  serviceability: ServiceabilityDto;
}

export * from "./address-selector";
export * from "./address-form";
