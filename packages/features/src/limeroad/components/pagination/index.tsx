"use client";

import type { ComponentProps } from "react";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { isBrowser } from "@app/core/utils";
import { paginationQueryOptions } from "@app/services/limeroad/queries/pagination";
import { Pressable } from "@app/ui/elements/pressable";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { useInView } from "@app/ui/hooks/use-in-view";
import { cn } from "@app/ui/utils/cn";

import type { PaginationProps } from "./types";
import { SkeletonLoader } from "../skeleton";

/**
 * Pagination component that loads and renders assets when they come into view
 */
export function Pagination<AssetType extends string>({
  data,
  scrollRootId,
  threshold = 640,
  onLoad,
  onError,
  AssetRenderer,
  className
}: PaginationProps<AssetType> & ComponentProps<typeof View>) {
  const { assetType, url } = data;

  const root = isBrowser() && scrollRootId ? document.getElementById(scrollRootId) : null;

  // useInview detect when element is in/near viewport
  const { ref, inView } = useInView({
    root,
    rootMargin: `0px 0px ${threshold}px 0px`,
    triggerOnce: true // Only trigger the callback once
  });

  // Use React Query to fetch data
  const {
    data: payload,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    ...paginationQueryOptions(url),
    enabled: inView // Only run the query when element is visible
  });

  // Call the onLoad callback when data is fetched successfully
  useEffect(() => {
    if (payload && !isLoading && !isError) {
      onLoad?.(payload);
    }
  }, [payload, isLoading, isError, onLoad]);

  // Call the onError callback when an error occurs
  useEffect(() => {
    if (isError) {
      onError?.(error);
    }
  }, [isError, error, onError]);

  const asset = { type: assetType, payload: payload };

  if (isError)
    return (
      <View className={cn("rounded border border-red-300 bg-red-50 p-4", className)}>
        <Text className="text-red-600">
          {error instanceof Error ? error.message : "Failed to load content"}
        </Text>
        <Pressable className="mt-2 rounded bg-red-100 p-2" onPress={() => refetch()}>
          <Text className="text-center text-red-600">Retry</Text>
        </Pressable>
      </View>
    );

  if (payload) return <AssetRenderer asset={asset} />;

  return (
    // @ts-expect-error TODO: Fix type error
    <View ref={ref} className={className}>
      <SkeletonLoader assetType={assetType} />
    </View>
  );
}

export type { PaginationProps };
