export const ROUTES = {
  HOME: "/",
  NOTIFICATION: "/notification",
  STORE: "/store",
  OFFERS: "/offers",
  CART: "/cart",
  CHECKOUT: (clientTxnId: string) => `/checkout/${clientTxnId}`,
  PRODUCT: (productId: string) => `/product/${productId}`,
  SEARCH: (query: string) => `/search/${query}`,
  ACCOUNT: {
    HOME: "/account",
    PROFILE: "/account/profile",
    ORDERS: "/account/orders",
    REWARDS: "/account/rewards",
    RETURNS: "/account/returns",
    CREDITS: "/account/credits",
    WISHLIST: "/wishlist"
  }
};
