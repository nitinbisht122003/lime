import type { AddressDto } from "../address";
import type { ProductDto } from "../product";

export type PaymentDetailsItemType = "money" | "string" | "positive_money" | "negative_money";

export interface PaymentDetailsRowDto {
  name: string;
  value: number | string;
  type: PaymentDetailsItemType;
  name_color: string;
  value_color: string;
}

export type PaymentDetailsDto = PaymentDetailsRowDto[];

export interface OrderItem {
  id: string;
  product: ProductDto;
  tracking_status: string;
}

export type DeliveryStatus =
  | "incomplete_order_information"
  | "not_delivered"
  | "address_incomplete"
  | "delivered"
  | "order_confirmed"
  | "order_packed"
  | "cancelled";

export interface SubOrder {
  id: string;
  items: [];
  delivery_status: DeliveryStatus;
}

export interface Order {
  id: string;
  address: AddressDto;
  payment_details: PaymentDetailsDto;
  subOrders: SubOrder[];
}

export interface OrdersList {
  orders: [];
}
