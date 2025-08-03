"use client";

import type { ComponentProps } from "react";
import { useState } from "react";

import type { ColorFilterRailViewModel, ProductRailViewModel } from "@app/types/limeroad";
import { Badge, BadgeText } from "@app/ui/components/badge";
import { ProductCard as ProductCardUI, ProductDescription } from "@app/ui/components/product-card";
import {
  ProductRailScrollContainer,
  ProductRail as ProductRailUI
} from "@app/ui/components/product-rail";
import { TextLinearGradient } from "@app/ui/components/text-linear-gradient";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";

import { ProductImageSection, ProductPriceSection } from "../product-card";
import { FilterBadges } from "./filter-badges";

type ColorFilterRailProps = ComponentProps<typeof View> & {
  colorFilterRail: ColorFilterRailViewModel;
};

type ColorFilterItem = ColorFilterRailViewModel["filters"][number];

export function ColorFilterRail({ colorFilterRail }: ColorFilterRailProps) {
  const { title, subtitle, filters, defaultFilter, products } = colorFilterRail;

  const [selectedFilter, setSelectedFilter] = useState(defaultFilter);

  const handleFilterChange = (filter: ColorFilterItem) => {
    setSelectedFilter(filter);
  };

  return (
    <View className="gap-2">
      {/* title and subtitle */}
      <View className="">
        {title && selectedFilter?.color && (
          <TextLinearGradient
            color={selectedFilter.color}
            className="text-center text-[29px] font-bold"
          >
            {title}
          </TextLinearGradient>
        )}
        <Text
          className="text-1x1 mt-1 text-center"
          style={{
            color: "#6B7280"
          }}
        >
          {subtitle}
        </Text>
      </View>
      {/* filter badges */}
      <View className="w-full overflow-hidden px-2">
        <FilterBadges
          filters={filters}
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterChange}
          renderFilterItem={renderColorFilterItem}
        />
      </View>
      <ProductRailUI>
        <ProductRailScrollContainer>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductRailScrollContainer>
      </ProductRailUI>
    </View>
  );
}

function renderColorFilterItem({
  filter,
  selected,
  onFilterChange
}: {
  filter: ColorFilterItem;
  selected: boolean;
  onFilterChange: (filter: ColorFilterItem) => void;
}) {
  return (
    <Badge
      onPress={() => onFilterChange(filter)}
      action="default"
      variant="outline"
      size="sm"
      active={selected}
      className="gap-2"
    >
      <View
        style={{
          backgroundColor: filter.color,
          padding: 8,
          borderRadius: 9999,
          borderWidth: 0.25,
          borderColor: "#6C757D"
        }}
      ></View>
      <BadgeText>{filter.label}</BadgeText>
    </Badge>
  );
}

function ProductCard({ product }: { product: ProductRailViewModel["products"][number] }) {
  return (
    <ProductCardUI>
      <ProductImageSection
        imageUrl={product.image_url}
        altText={product.name}
        rating={product.rating}
      />
      <ProductDescription>
        <ProductPriceSection mrp={product.mrp} sellingPrice={product.selling_price} />
      </ProductDescription>
    </ProductCardUI>
  );
}
