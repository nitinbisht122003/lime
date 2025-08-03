import type { GridLayoutData } from "@app/types/common";

export const gridLayoutData: GridLayoutData = {
  type: "root",
  width: "100%",
  aspectRatio: 1,
  direction: "horizontal",
  split: [60, 40],
  children: [
    {
      type: "element",
      data: {
        image: "https://img0.junaroad.com/uiproducts/19724217/zoom_0-1720077900.jpg",
        text: "Image 1"
      }
    },
    {
      type: "grid",
      direction: "vertical",
      split: [50, 50],
      children: [
        {
          type: "element",
          data: {
            image: "https://img0.junaroad.com/uiproducts/19724217/zoom_0-1720077900.jpg",
            text: "Image 1"
          }
        },
        {
          type: "element",
          data: {
            image: "https://img0.junaroad.com/uiproducts/19724217/zoom_0-1720077900.jpg",
            text: "Image 1"
          }
        }
      ]
    }
  ]
};
