import type { StoryDto } from "@app/types/limeroad";

const gridLayoutData: StoryDto["grid_data"] = {
  type: "root",
  width: "100%",
  aspectRatio: 6 / 5,
  direction: "horizontal",
  split: [60, 40],
  gap: 4,
  children: [
    {
      type: "element",
      data: {
        id: "1",
        image: "https://img0.junaroad.com/uiproducts/19724217/zoom_0-1720077900.jpg"
      }
    },
    {
      type: "grid",
      direction: "vertical",
      split: [50, 50],
      gap: 4,
      children: [
        {
          type: "element",
          data: {
            id: "2",
            image: "https://img0.junaroad.com/uiproducts/19724217/zoom_0-1720077900.jpg"
          }
        },
        {
          type: "element",
          data: {
            id: "3",
            image: "https://img0.junaroad.com/uiproducts/19724217/zoom_0-1720077900.jpg"
          }
        }
      ]
    }
  ]
};

export const story: StoryDto = {
  id: "1",
  user: {
    avatar: "https://img0.junaroad.com/uiproducts/19724217/zoom_0-1720077900.jpg",
    name: "John Doe",
    followers: 1000
  },
  link: "https://example.com/story/1",
  grid_data: gridLayoutData,
  title: "#SummerCollection!",
  description:
    "Check out our latest summer collection featuring vibrant colors and comfortable fabrics for the season.",
  products_count: 27
};

export const stories = [story, story, story];
