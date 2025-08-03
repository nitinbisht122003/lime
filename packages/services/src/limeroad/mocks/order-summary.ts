import type { OrderSummaryDto } from "@app/types/limeroad";

export const orderSummary: OrderSummaryDto = [
  {
    name: "Total Price",
    value: 1139,
    type: "money",
    name_color: "#2A2A2A",
    value_color: "#2A2A2A"
  },
  {
    value_color: "#70C705",
    key: "shipping_charges",
    name_color: "#2A2A2A",
    name: "Shipping Charges",
    value: "FREE",
    type: "string"
  },
  {
    name: "Handling Charges",
    value: "FREE",
    type: "string",
    name_color: "#2A2A2A",
    value_color: "#70C705",
    strike_text: 29
  },
  {
    name: "Amount Payable",
    key: "final_amount",
    value: 1139,
    type: "money",
    name_color: "#2A2A2A",
    value_color: "#2A2A2A"
  }
];
