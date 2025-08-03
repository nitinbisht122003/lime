import type { EddCheckerDto } from "@app/types/limeroad";

import { CustomerPromisesData } from "./customer-promises";

export const EddChecker: EddCheckerDto = {
  product_id: "1234567890",
  pincode: 110001,
  serviceability: {
    status_code: 1,
    status_message: "Prepaid only"
  },
  edd: "Tue,17 June", // Estimated Delivery Date
  defaulteddText: "Expected delivery in 3 to 6 days",
  promises: CustomerPromisesData
};
