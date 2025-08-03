import type { ProductGalleryDto } from "@app/types/limeroad";

// Create gallery items in the requested format
export const productGallery: ProductGalleryDto = {
  data: [
    {
      type: "image",
      image: {
        low: "https://img1.junaroad.com/uiproducts/19779214/zoom_0-1709828779.jpg",
        high: "https://img1.junaroad.com/uiproducts/19779214/zoom_0-1709828779.jpg"
      }
    },
    {
      type: "video",
      url: "https://n-img0.junaroad.com/limeroad-videos/transcoded_videos/output/66c6caaefd3a085c20720195/hls_66c6caaefd3a085c20720195_vip.m3u8",
      thumbnail: "https://img1.junaroad.com/uiproducts/19779214/zoom_1-1709828779.jpg"
    },
    {
      type: "image",
      image: {
        low: "https://img1.junaroad.com/uiproducts/19779214/zoom_2-1709828779.jpg",
        high: "https://img1.junaroad.com/uiproducts/19779214/zoom_2-1709828779.jpg"
      }
    },
    {
      type: "image",
      image: {
        low: "https://img1.junaroad.com/uiproducts/19779214/zoom_3-1709828779.jpg",
        high: "https://img1.junaroad.com/uiproducts/19779214/zoom_3-1709828779.jpg"
      },
      key_highlights: {
        heading: "Key Highlights",
        display_attributes: [
          {
            key: "Color",
            value: "Blue"
          },
          {
            key: "Type",
            value: "A-Line"
          },
          {
            key: "Material",
            value: "Cotton-blend"
          }
        ]
      }
    }
  ]
};
