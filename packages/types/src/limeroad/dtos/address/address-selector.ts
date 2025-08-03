import type { AddressDto } from ".";

export interface AddressSelector<Address> {
  addresses: Address[];
  default_address_id?: number | null;
  sticky?: boolean;
}

export type AddressSelectorDto = AddressSelector<AddressDto>;
