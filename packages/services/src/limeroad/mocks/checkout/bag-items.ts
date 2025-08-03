import type { CheckoutBagItemDto, CheckoutBagItemsDto } from "@app/types/limeroad";

export const checkoutBagItem: CheckoutBagItemDto = {
  id: 1,
  name: "Product 1",
  url: "https://example.com/product-1",
  image: "https://img0.junaroad.com/uiproducts/17814929/pri_175_p-1627476120.jpg",
  size: "M",
  quantity: 1,
  mrp: 100,
  selling_price: 80,
  delivery_date: "2021-01-01"
};

export const checkoutBagItems: CheckoutBagItemsDto = {
  items: [checkoutBagItem, checkoutBagItem, checkoutBagItem]
};
