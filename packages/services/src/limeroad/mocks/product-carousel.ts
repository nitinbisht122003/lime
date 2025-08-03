import type { ProductCarouselDto } from "@app/types/limeroad";

export const productCarousel: ProductCarouselDto = {
  id: "product1",
  name: "Product 1",
  brand: "Brand A",
  mrp: 1500,
  selling_price: 1200,
  rating: 4.5,
  images: [
    "https://img0.junaroad.com/uiproducts/21946355/zoom_0-1748958908.jpg",
    "https://img0.junaroad.com/uiproducts/15651733/zoom_0-1709548842.jpg",
    "https://img1.junaroad.com/uiproducts/17358176/zoom_0-1603112419.jpg"
  ],
  seo_url: "https://example.com/product1"
};
