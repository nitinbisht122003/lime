import type { AddressDto } from "@app/types/limeroad";

export const address: AddressDto = {
  id: 1,
  type: "home",
  first_name: "John",
  last_name: "Doe",
  address_line_1: "123 Main St",
  address_line_2: "Apt 4B",
  city: "New York",
  state: "NY",
  country: "USA",
  pincode: "110031",
  mobile: "1234567890",
  serviceability: {
    status_code: 1,
    status_message: "Serviceable"
  }
};
