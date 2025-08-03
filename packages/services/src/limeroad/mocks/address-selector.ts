import type { AddressSelectorDto } from "@app/types/limeroad";

export const addressSelectorData: AddressSelectorDto = {
  addresses: [
    {
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
        status_message: "Only prepaid available"
      }
    },
    {
      id: 2,
      type: "office",
      first_name: "Jane",
      last_name: "Smith",
      address_line_1: "456 Elm St",
      address_line_2: "Suite 300",
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      pincode: "90001",
      mobile: "0987654321",
      serviceability: {
        status_code: 0,
        status_message: "Not serviceable"
      }
    },
    {
      id: 3,
      type: "office",
      first_name: "Jane",
      last_name: "Smith",
      address_line_1: "456 Elm St",
      address_line_2: "Suite 300",
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      pincode: "90001",
      mobile: "0987654321",
      serviceability: {
        status_code: 3,
        status_message: "Delivery available"
      }
    }
  ],
  default_address_id: 1
};
