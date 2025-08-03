import type { AddressSelector } from "../dtos";
import type { AddressViewModel } from "./address";

export type AddressSelectorViewModel = Omit<
  AddressSelector<AddressViewModel>,
  "default_address_id"
> & {
  defaultAddress: AddressViewModel | null;
  sticky: boolean;
};
