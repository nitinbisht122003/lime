import type { SizeSelectorDto } from "@app/types/limeroad";

export const SizeSelector: SizeSelectorDto = {
  variants: [
    {
      id: "1",
      size: "S"
    },
    {
      id: "2",
      size: "M",
      availability: 2
    },
    {
      id: "3",
      size: "L",
      size_info: {
        cm: "Bust 36 Inches (Garment)",
        in: "Bust 36 Inches (Garment)"
      }
    }
  ],
  size_guide: {
    size_chart: {
      headers: [
        { label: "Standard Size", key: "standard_size" },
        { label: "Brand Size", key: "brand_size" },
        { label: "Waist", key: "waist" },
        { label: "Bust", key: "bust" },
        { label: "Across Shoulder", key: "across_shoulder" }
      ],
      variant_map: {
        "1": [
          { key: "standard_size", value: { cm: "XS", in: "XS" } },
          { key: "brand_size", value: { cm: "XS", in: "XS" } },
          { key: "waist", value: { cm: "28", in: "28" } },
          { key: "bust", value: { cm: "32", in: "32" } },
          { key: "across_shoulder", value: { cm: "13", in: "13" } }
        ],
        "2": [
          { key: "standard_size", value: { cm: "S", in: "S" } },
          { key: "brand_size", value: { cm: "S", in: "S" } },
          { key: "waist", value: { cm: "30", in: "30" } },
          { key: "bust", value: { cm: "34", in: "34" } },
          { key: "across_shoulder", value: { cm: "13.5", in: "13.5" } }
        ],
        "3": [
          { key: "standard_size", value: { cm: "M", in: "M" } },
          { key: "brand_size", value: { cm: "M", in: "M" } },
          { key: "waist", value: { cm: "32", in: "32" } },
          { key: "bust", value: { cm: "36", in: "36" } },
          { key: "across_shoulder", value: { cm: "14", in: "14" } }
        ],
        "4": [
          { key: "standard_size", value: { cm: "L", in: "L" } },
          { key: "brand_size", value: { cm: "L", in: "L" } },
          { key: "waist", value: { cm: "34", in: "34" } },
          { key: "bust", value: { cm: "38", in: "38" } },
          { key: "across_shoulder", value: { cm: "14.5", in: "14.5" } }
        ],
        "5": [
          { key: "standard_size", value: { cm: "XL", in: "XL" } },
          { key: "brand_size", value: { cm: "XL", in: "XL" } },
          { key: "waist", value: { cm: "36", in: "36" } },
          { key: "bust", value: { cm: "40", in: "40" } },
          { key: "across_shoulder", value: { cm: "15", in: "15" } }
        ],
        "6": [
          { key: "standard_size", value: { cm: "2XL", in: "2XL" } },
          { key: "brand_size", value: { cm: "2XL", in: "2XL" } },
          { key: "waist", value: { cm: "38", in: "38" } },
          { key: "bust", value: { cm: "42", in: "42" } },
          { key: "across_shoulder", value: { cm: "16", in: "16" } }
        ]
      }
    },
    selectable: true,
    measurement_guide: {
      image: "https://img1.junaroad.com/assets/images/mobileNotif/img-1730898871352.jpg",
      description: "How to measure"
    }
  }
};
