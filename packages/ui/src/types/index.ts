/* eslint-disable @typescript-eslint/no-explicit-any */
import type { VariantProps } from "@gluestack-ui/nativewind-utils";
import type NextImage from "next/image";
import type { ComponentPropsWithRef, Dispatch, ElementType, SetStateAction } from "react";

import type { ImageSize } from "../elements/image";
import type { LimeroadLogo } from "../icons/limeroad-logo";

export type IStyleContext<K extends (...args: any) => any> = Partial<
  Omit<VariantProps<K>, "className">
>;

export type ComponentPropsWithVariants<
  T extends ElementType,
  K extends (...args: any) => any
> = ComponentPropsWithRef<T> & VariantProps<K>;

export type CustomIcon = typeof LimeroadLogo;

export type CustomIconHOC = (props?: { fill?: string }) => CustomIcon;

export type NextImageProps = ComponentPropsWithRef<typeof NextImage>;

export type SetStateFn<T> = Dispatch<SetStateAction<T>>;

export type ChangeHandler<T> = (value: T) => void;

export type ImageSizeMap<K extends string> = Record<K, ImageSize>;
