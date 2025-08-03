import type { RefObject } from "react";
import type { View } from "react-native";

import { scrollIntoView } from "@app/ui/utils/scroll-into-view";

export type SectionRefs<AssetType extends string> = RefObject<
  Partial<Record<AssetType, View | null>>
>;

export type ScrollToSection<AssetType extends string> = (section: AssetType) => void;

export const scrollSectionIntoView = <AssetType extends string>(
  section: AssetType,
  refs: SectionRefs<AssetType>
) => {
  const sectionRefs = refs.current;

  const element = sectionRefs[section];

  scrollIntoView({ element });
};
