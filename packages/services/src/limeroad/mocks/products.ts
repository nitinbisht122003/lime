import type { ProductDto } from "@app/types/limeroad";

export const products: ProductDto[] = [
  {
    id: "12345",
    name: "Stylish Summer Dress",
    brand: "Fashionista",
    rating: 4.5,
    image_url: `https://img1.junaroad.com/uiproducts/19779214/zoom_3-1709828779.jpg`, // Placeholder URL
    seo_url: "/products/stylish-summer-dress"
  },
  {
    id: "67890",
    name: "Casual Denim Jacket",
    brand: "Denim Co.",
    rating: 4.2,
    image_url: `https://img1.junaroad.com/uiproducts/19779214/zoom_1-1709828779.jpg`, // Placeholder URL
    seo_url: "/products/casual-denim-jacket"
  },
  {
    id: "11223",
    name: "Elegant Evening Gown",
    brand: "Glamour Wear",
    rating: 4.8,
    image_url: `https://img1.junaroad.com/uiproducts/19779214/zoom_2-1709828779.jpg`, // Placeholder URL
    seo_url: "/products/elegant-evening-gown"
  }
];
