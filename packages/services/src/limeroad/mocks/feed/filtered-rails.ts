import type { ColorFilterRailDto } from "@app/types/limeroad";

import { productCards } from "../product-card";

export const colorFilterRail: ColorFilterRailDto = {
  title: "Stunning Styles in Red",
  subtitle: "Select your favorite color",
  filters: [
    {
      id: "red",
      label: "Red",
      color: "#FF0000"
    },
    {
      id: "blue",
      label: "Blue",
      color: "#0000FF"
    },
    {
      id: "green",
      label: "Green",
      color: "#00FF00"
    },
    {
      id: "black",
      label: "Black",
      color: "#000000"
    },
    {
      id: "grey",
      label: "Grey",
      color: "#808080"
    },
    {
      id: "off-white",
      label: "Off White",
      color: "#F5F5F5"
    }
  ],
  defaultFilterId: "red",
  products: productCards
};
