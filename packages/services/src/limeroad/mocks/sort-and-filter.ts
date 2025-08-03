import type { SortAndFilterDto } from "@app/types/limeroad";

export const sortandFilter: SortAndFilterDto = {
  sort_options: [
    {
      label: "New",
      filter: "new"
    },
    {
      label: "Price: Low to High",
      filter: "price_low_to_high"
    },
    {
      label: "Price: High to Low",
      filter: "price_high_to_low"
    },
    {
      label: "Discount",
      filter: "discount"
    },
    {
      label: "Popularity",
      filter: "popularity"
    }
  ],
  filter_options: [
    {
      label: "Categories",
      filter_id: "categories"
    },
    {
      label: "clothes",
      filter_id: "clothes"
    },
    {
      label: "shoes",
      filter_id: "shoes"
    },
    {
      label: "accessories",
      filter_id: "accessories"
    },
    {
      label: "bags",
      filter_id: "bags"
    },
    {
      label: "watches",
      filter_id: "watches"
    },
    {
      label: "jewellery",
      filter_id: "jewellery"
    }
  ]
};
