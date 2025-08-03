import type {
  CardsPaymentMethodDto,
  CodPaymentMethodDto,
  NetBankingPaymentMethodDto,
  PaymentsSectionDto,
  UpiPaymentMethodDto,
  WalletsPaymentMethodDto
} from "@app/types/limeroad";
import { PaymentGateway, PaymentMode } from "@app/types/limeroad";

export const codPaymentMethodDto: CodPaymentMethodDto = {
  type: "cod",
  mode: PaymentMode.COD,
  name: "Cash on Delivery",
  description: "Pay cash on delivery",
  icon: "https://img3.junaroad.com/images/logo/pm_logo/cod_logo.png"
};

export const upiPaymentMethodDto: UpiPaymentMethodDto = {
  type: "upi",
  name: "UPI",
  icon: "https://img3.junaroad.com/images/logo/pm_logo/upi_logo.png",
  expanded: false,
  options: [
    {
      id: "upi_phonepe",
      name: "PhonePe",
      icon: "https://n-img1.junaroad.com/assets/images/mobileNotif/img-1709188046009.jpg",
      mode: PaymentMode.UPI,
      value: "phonepe",
      pg: PaymentGateway.RAZORPAY
    },
    {
      id: "upi_gpay",
      name: "Google Pay",
      icon: "https://n-img1.junaroad.com/assets/images/mobileNotif/img-1709188046009.jpg",
      mode: PaymentMode.UPI,
      value: "gpay",
      pg: PaymentGateway.PAYU
    },
    {
      id: "upi_intent",
      name: "Pay with any UPI App",
      icon: "https://n-img1.junaroad.com/assets/images/mobileNotif/img-1709188046009.jpg",
      mode: PaymentMode.INTENT,
      value: "intent",
      pg: PaymentGateway.RAZORPAY
    },
    {
      id: "upi_vpa",
      name: "Pay with any UPI ID",
      icon: "https://n-img1.junaroad.com/assets/images/mobileNotif/img-1709188046009.jpg",
      mode: PaymentMode.VPA,
      value: "vpa",
      pg: PaymentGateway.RAZORPAY
    }
  ]
};

export const cardsPaymentMethodDto: CardsPaymentMethodDto = {
  type: "cards",
  mode: PaymentMode.CARDS,
  name: "Credit/Debit/ATM Card",
  icon: "https://img3.junaroad.com/images/logo/pm_logo/cards_logo.png",
  cards: [
    {
      type: "debit",
      network: "Visa",
      number: "********3456",
      name: "John Doe",
      bin: "123456",
      token: "1234567890",
      pg: PaymentGateway.PAYU
    },
    {
      type: "credit",
      network: "Mastercard",
      number: "********6398",
      name: "Jane Doe",
      bin: "7921731",
      token: "1234567890",
      pg: PaymentGateway.RAZORPAY
    }
  ]
};

export const netbankingPaymentMethodDto: NetBankingPaymentMethodDto = {
  type: "netbanking",
  name: "Net Banking",
  icon: "https://img3.junaroad.com/images/logo/pm_logo/nb_logo.png",
  max_options: 3,
  options: [
    {
      id: "netbanking_hdfc",
      name: "HDFC Bank",
      icon: "https://n-img1.junaroad.com/assets/images/mobileNotif/img-1709188046009.jpg",
      mode: PaymentMode.NETBANKING,
      value: "hdfc",
      pg: PaymentGateway.PAYU
    },
    {
      id: "netbanking_yesb",
      name: "YES Bank",
      icon: "https://n-img1.junaroad.com/assets/images/mobileNotif/img-1709188046009.jpg",
      mode: PaymentMode.NETBANKING,
      value: "yesb",
      pg: PaymentGateway.RAZORPAY
    },
    {
      id: "netbanking_sbi",
      name: "State Bank of India",
      icon: "https://n-img1.junaroad.com/assets/images/mobileNotif/img-1709188046009.jpg",
      mode: PaymentMode.NETBANKING,
      value: "sbi",
      pg: PaymentGateway.PAYU
    },
    {
      id: "netbanking_icici",
      name: "ICICI Bank",
      icon: "https://n-img1.junaroad.com/assets/images/mobileNotif/img-1709188046009.jpg",
      mode: PaymentMode.NETBANKING,
      value: "icici",
      pg: PaymentGateway.RAZORPAY
    }
  ]
};

export const walletsPaymentMethodDto: WalletsPaymentMethodDto = {
  type: "wallets",
  name: "Wallets",
  icon: "https://img2.junaroad.com/images/logo/wallet_payu/mode_wallet.png",
  options: [
    {
      id: "wallets_paytm",
      name: "Paytm",
      icon: "https://n-img1.junaroad.com/assets/images/mobileNotif/img-1709188046009.jpg",
      mode: PaymentMode.WALLETS,
      value: "paytm",
      pg: PaymentGateway.PAYU
    },
    {
      id: "wallets_mobikwik",
      name: "Mobikwik",
      icon: "https://n-img1.junaroad.com/assets/images/mobileNotif/img-1709188046009.jpg",
      mode: PaymentMode.WALLETS,
      value: "mobikwik",
      pg: PaymentGateway.RAZORPAY
    }
  ]
};

export const paymentsSectionDto: PaymentsSectionDto = {
  title: "Payment Options",
  trust_msg: {
    message: "100% Safe Payments",
    icon: "https://img1.junaroad.com/images/logo/trust_mode.png"
  },
  payment_methods: [
    codPaymentMethodDto,
    upiPaymentMethodDto,
    cardsPaymentMethodDto,
    netbankingPaymentMethodDto,
    walletsPaymentMethodDto
  ]
};
