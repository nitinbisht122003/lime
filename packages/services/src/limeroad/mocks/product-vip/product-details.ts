import type { ProductDetailsDto } from "@app/types/limeroad";

export const productDetails: ProductDetailsDto = {
  id: "123",
  highlights: [
    {
      key: "Material",
      value: "Cotton"
    },
    {
      key: "Occasion",
      value: "Casual"
    },
    {
      key: "Fit",
      value: "Regular"
    },
    {
      key: "Style",
      value: "Basic"
    },

    {
      key: "Pattern",
      value: "Plain"
    },
    {
      key: "Closure",
      value: "Button"
    }
  ],
  additionalInfo: [
    {
      key: "Fabric",
      value: "100% Cotton"
    },

    {
      key: "Care Instructions",
      value: "Machine wash cold"
    },
    {
      key: "Color",
      value: "Blue"
    },
    {
      key: "Package Contents",
      value: "1 T-shirt"
    }
  ]
};
