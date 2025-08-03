import type { AddressSelectorDto, AddressSelectorViewModel } from "@app/types/limeroad";

import { transformAddressDtoToViewModel } from "./address";

export const transformAddressSelectorDtoToViewModel = (
  addressSelector: AddressSelectorDto
): AddressSelectorViewModel => {
  const { addresses, default_address_id, sticky } = addressSelector;

  const defaultAddress = addresses.find((a) => a.id === default_address_id);

  return {
    addresses: addresses.map(transformAddressDtoToViewModel),
    defaultAddress: defaultAddress ? transformAddressDtoToViewModel(defaultAddress) : null,
    sticky: sticky ?? false
  };
};
