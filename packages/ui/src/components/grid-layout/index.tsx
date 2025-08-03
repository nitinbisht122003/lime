"use client";

import React from "react";

import type {
  GridContainerItem,
  GridElementItem,
  GridItem,
  GridLayoutData,
  GridLayoutProps,
  GridRootItem,
  IBasicGridElement
} from "@app/types/common";

import { Image } from "../../elements/image";
import { Text } from "../../elements/text";
import { View } from "../../elements/view";
import {
  gridContainerStyle,
  gridImageContainerStyle,
  gridImageStyle,
  gridItemStyle,
  gridTextStyle
} from "./styles";

function BasicGridElement({ item }: { item: IBasicGridElement }) {
  const { image, text, rounded = false } = item;

  return (
    <View className={gridImageContainerStyle({ rounded })}>
      <Image
        src={image}
        alt={text ?? "grid-item"}
        width="100%"
        height="100%"
        className={gridImageStyle({})}
      />
      {text && <Text className={gridTextStyle({})}>{text}</Text>}
    </View>
  );
}

/**
 * Renders a single element in the grid
 */
function GridElement<T extends object = IBasicGridElement>({
  item,
  index,
  customRenderer
}: {
  item: GridElementItem<T>;
  index: number;
  customRenderer?: GridLayoutProps<T>["renderElement"];
}) {
  // Use custom renderer if provided
  if (customRenderer) {
    return <>{customRenderer(item, index)}</>;
  }

  const { data } = item;

  if ("image" in data && typeof data.image === "string") {
    return <BasicGridElement item={data as IBasicGridElement} />;
  }

  throw new Error("Custom renderer not provided or data is not valid");
}

/**
 * Recursively renders a grid container and its children
 */
function GridContainer<T extends object = IBasicGridElement>({
  item,
  depth = 0,
  renderElement
}: {
  item: GridRootItem<T> | GridContainerItem<T>;
  depth?: number;
  renderElement?: (item: GridElementItem<T>, index: number) => React.ReactNode;
}) {
  const { direction, split, children } = item;
  const isRoot = item.type === "root";

  // Handle width, height, and aspectRatio for root elements
  let dimensionsStyle = {};

  if (isRoot) {
    const { width, height, aspectRatio } = item;

    dimensionsStyle = {
      ...dimensionsStyle,
      width,
      height,
      aspectRatio
    };
  }

  // Add gap if specified
  const gap = item.gap ?? 8; // Default gap value
  const gapStyle = {
    gap: gap
  };

  return (
    <View
      className={gridContainerStyle({
        direction
      })}
      style={[dimensionsStyle, gapStyle]}
    >
      {children.map((child, index) => {
        // Calculate flex basis based on split percentages
        const flexStyle = {
          flexBasis: `${split[index]}%` as `${number}%`
        };

        return (
          <View key={`grid-item-${depth}-${index}`} style={flexStyle} className={gridItemStyle({})}>
            <GridItemComponent
              item={child}
              depth={depth + 1}
              index={index}
              renderElement={renderElement}
            />
          </View>
        );
      })}
    </View>
  );
}

/**
 * Renders a grid item which can be either a container or an element
 */
function GridItemComponent<T extends object = IBasicGridElement>({
  item,
  depth = 0,
  index = 0,
  renderElement
}: {
  item: GridRootItem<T> | GridItem<T>;
  depth?: number;
  index?: number;
  renderElement?: GridLayoutProps<T>["renderElement"];
}) {
  if (item.type === "element") {
    return <GridElement item={item} index={index} customRenderer={renderElement} />;
  }

  return <GridContainer item={item} depth={depth} renderElement={renderElement} />;
}

/**
 * GridLayout component that renders a configurable grid based on provided data
 */
export function GridLayout<T extends object = IBasicGridElement>({
  data,
  className,
  renderElement
}: GridLayoutProps<T>) {
  return (
    <View className={className}>
      <GridItemComponent item={data} renderElement={renderElement} />
    </View>
  );
}

export type { GridLayoutProps, GridItem, GridElementItem, GridContainerItem, GridLayoutData };
