import type { CartItemDto } from "@app/types/limeroad";

export const cartItem: CartItemDto = {
  id: 1,
  product_id: "123456",
  name: "Product 1",
  brand: "Brand 1",
  url: "/blue-cotton-divena-p17814929",
  image: "https://img0.junaroad.com/uiproducts/17814929/pri_175_p-1627476120.jpg",
  mrp: 100,
  selling_price: 80,
  quantity: 1,
  availability: 1,
  variant_id: "1",
  variants: [
    {
      id: "1",
      size: "S",
      availability: 6
    },
    {
      id: "2",
      size: "M",
      availability: 2
    },
    {
      id: "3",
      size: "L",
      availability: 0
    }
  ],
  delivery_date: "2025-06-10T00:00:00.000Z"
};
