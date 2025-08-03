"use client";

import type { ComponentProps } from "react";
import { Fragment, useEffect, useState } from "react";

import type { ProductAnglesSectionViewModel } from "@app/types/limeroad";
import {
  ProductAnglesFocusRail,
  ProductAnglesGridContainerContainer,
  ProductAnglesRail,
  ProductAnglesTitle,
  ProductAngles as ProductAnglesUI
} from "@app/ui/components/product-angles";

import { GridLayout } from "@app/ui/components/grid-layout";
import { FocusRail as FocusRailUI } from "@app/ui/components/focus-rail";

import { View } from "@app/ui/elements/View";

import { RailProductCard } from "./focus-rail";

type ProductAnglesProps = {
  sections: ProductAnglesSectionViewModel[];
} & ComponentProps<typeof ProductAnglesUI>;

export function ProductAngles({ sections, className }: ProductAnglesProps) {
  const [sectionFocusedIndexes, setSectionFocusedIndexes] = useState<Record<string, number>>(() => {
    const initialState: Record<string, number> = {};
    sections.forEach((section) => {
      initialState[section.title] = 0;
    });
    return initialState;
  });

  useEffect(() => {
    const newState: Record<string, number> = {};
    sections.forEach((section) => {
      newState[section.title] = 0;
    });
    setSectionFocusedIndexes(newState);
  }, [sections]);

  const handleFocusChange = (sectionTitle: string) => (index: number) => {
    setSectionFocusedIndexes((prev) => ({
      ...prev,
      [sectionTitle]: index
    }));
  };

  return (
    <ProductAnglesUI className={className}>
      {sections.map((section) => {
        const focusedIndex = sectionFocusedIndexes[section.title] ?? 0;

        return (
          <Fragment key={section.title}>
            <ProductAnglesTitle>{section.title}</ProductAnglesTitle>
            <ProductAnglesRail>
              <View className="relative mb-4">
                {section.products.map((productWithLayout, index) => (
                  <ProductAnglesGridContainerContainer
                    key={productWithLayout.product.id}
                    className={index === focusedIndex ? "block" : "hidden"}
                    style={{
                      position: index === focusedIndex ? "static" : "absolute"
                    }}
                  >
                    <GridLayout data={productWithLayout.layout} />
                  </ProductAnglesGridContainerContainer>
                ))}
              </View>

              <ProductAnglesFocusRail>
                <FocusRailUI onFocusChange={handleFocusChange(section.title)}>
                  {section.products.map((productWithLayout) => (
                    <RailProductCard
                      key={productWithLayout.product.id}
                      product={productWithLayout.product}
                    />
                  ))}
                </FocusRailUI>
              </ProductAnglesFocusRail>
            </ProductAnglesRail>
          </Fragment>
        );
      })}
    </ProductAnglesUI>
  );
}
