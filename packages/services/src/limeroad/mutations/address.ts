import { useMutation } from "@tanstack/react-query";

import { addressService } from "../apis/address";

export const useUpdateDefaultAddress = () => {
  return useMutation({
    mutationFn: ({ addressId }: { addressId: number }) =>
      addressService.updateDefaultAddress(addressId)
  });
};
