import type { Href } from "../../../common";

export interface TrustMsgDto {
  message: string;
  icon: Href;
}

export enum PaymentMode {
  COD = "cod",
  UPI = "upi",
  INTENT = "intent",
  VPA = "vpa",
  CARDS = "cards",
  NETBANKING = "nb",
  WALLETS = "wallets"
}

export type PaymentMethodType = "cod" | "upi" | "cards" | "netbanking" | "wallets";

export interface BasePaymentMethodDto {
  type: PaymentMethodType;
  name: string;
  description?: string;
  icon: Href;
}

export interface SingleModePaymentMethodDto extends BasePaymentMethodDto {
  mode: PaymentMode;
}

export interface CodPaymentMethodDto extends SingleModePaymentMethodDto {
  type: "cod";
  mode: PaymentMode.COD;
}

export enum PaymentGateway {
  PAYU = "payu",
  RAZORPAY = "razorpay"
}

export interface PaymentOptionDto<T extends PaymentMode> {
  id: string;
  name: string;
  icon: Href;
  mode: T;
  value: string;
  pg: PaymentGateway;
}

export interface PaymentMethodWithOptionsDto<T extends PaymentMode> {
  options: PaymentOptionDto<T>[];
  max_options?: number;
  expanded?: boolean;
}

export type MultipleOptionsPaymentMethodDto<T extends PaymentMode> = BasePaymentMethodDto &
  PaymentMethodWithOptionsDto<T>;

export interface UpiPaymentMethodDto
  extends MultipleOptionsPaymentMethodDto<PaymentMode.UPI | PaymentMode.VPA | PaymentMode.INTENT> {
  type: "upi";
}

type CardType = "debit" | "credit";

export interface CardDto {
  type: CardType;
  network: string;
  number: string;
  name: string;
  bin: string;
  token: string;
  pg: PaymentGateway;
}

export interface CardsPaymentMethodDto extends BasePaymentMethodDto {
  type: "cards";
  mode: PaymentMode.CARDS;
  cards: CardDto[];
}

export interface NetBankingPaymentMethodDto
  extends MultipleOptionsPaymentMethodDto<PaymentMode.NETBANKING> {
  type: "netbanking";
}

export interface WalletsPaymentMethodDto
  extends MultipleOptionsPaymentMethodDto<PaymentMode.WALLETS> {
  type: "wallets";
}

export type PaymentMethodDto =
  | CodPaymentMethodDto
  | UpiPaymentMethodDto
  | CardsPaymentMethodDto
  | NetBankingPaymentMethodDto
  | WalletsPaymentMethodDto;

export interface PaymentsSectionDto {
  title: string;
  trust_msg: TrustMsgDto;
  payment_methods: PaymentMethodDto[];
}
