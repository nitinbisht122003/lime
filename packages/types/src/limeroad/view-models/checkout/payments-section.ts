import type {
  CardsPaymentMethodDto,
  CodPaymentMethodDto,
  MultipleOptionsPaymentMethodDto,
  NetBankingPaymentMethodDto,
  PaymentMethodDto,
  PaymentMode,
  PaymentOptionDto,
  PaymentsSectionDto,
  SingleModePaymentMethodDto,
  UpiPaymentMethodDto,
  WalletsPaymentMethodDto
} from "../../dtos";

export type SingleModePaymentMethodViewModel = SingleModePaymentMethodDto;

export type MultipleOptionsPaymentMethodViewModel<T extends PaymentMode> =
  MultipleOptionsPaymentMethodDto<T>;

export type CodPaymentMethodViewModel = CodPaymentMethodDto;

export type PaymentOptionViewModel<T extends PaymentMode> = PaymentOptionDto<T>;

export type UpiPaymentMethodViewModel = UpiPaymentMethodDto;

export type CardsPaymentMethodViewModel = CardsPaymentMethodDto;

export type NetBankingPaymentMethodViewModel = NetBankingPaymentMethodDto;

export type WalletsPaymentMethodViewModel = WalletsPaymentMethodDto;

export type PaymentMethodViewModel = PaymentMethodDto;

export type PaymentsSectionViewModel = PaymentsSectionDto;
