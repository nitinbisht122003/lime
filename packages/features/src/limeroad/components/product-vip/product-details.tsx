"use client";

import type { ProductDetailsViewModel } from "@app/types/limeroad";
import {
  Accordion as AccordionBox,
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger
} from "@app/ui/components/accordion";
import { Icon } from "@app/ui/components/icon";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { AngleDownIcon } from "@app/ui/icons/angle-down-icon";
import { AngleUpIcon } from "@app/ui/icons/angle-up-icon";
import { CallIconHOC } from "@app/ui/icons/call-icon";
import { packageIcon } from "@app/ui/icons/package-icon";
import { cn } from "@app/ui/utils/cn";

interface ProductDetailsProps {
  details: ProductDetailsViewModel;
  className?: string;
}

export const ProductDetails = ({ details, className }: ProductDetailsProps) => {
  return (
    <View className={cn("flex flex-col gap-6", className)}>
      {details.description && <Text className="text-sm text-gray-600">{details.description}</Text>}
      <DetailsAccordion highlights={details.highlights} additionalInfo={details.additionalInfo} />
      <HelpSection />
    </View>
  );
};

const ProductHighlightsTitle = () => {
  return (
    <View className="flex-row items-center gap-3">
      <Icon as={packageIcon} size="xl" />
      <Text className="text-lr-grey-800 text-base font-medium">Product Highlights</Text>
    </View>
  );
};

const ProductHighlightsContent = ({
  highlights
}: {
  highlights: ProductDetailsViewModel["highlights"];
}) => {
  if (!highlights) return null;

  const halfwayPoint = Math.floor(Object.keys(highlights).length / 2);
  return (
    <View className="mt-4 w-full flex-row justify-between px-2">
      <View className="flex w-2/5 flex-col gap-4">
        {highlights.slice(0, halfwayPoint).map((attr, index) => (
          <View key={index} className="w-4/5">
            <Text className="m-0 text-sm font-normal text-gray-600">{attr.key}</Text>
            <Text className="mt-1 text-sm font-medium text-gray-800">{attr.value}</Text>
          </View>
        ))}
      </View>

      <View className="bg-gray-500 opacity-20">
        <View className="h-[154px] w-px border-l border-dashed border-gray-400"></View>
      </View>

      <View className="flex w-2/5 flex-col gap-4">
        {highlights.slice(halfwayPoint).map((attr, index) => (
          <View key={index} className="w-4/5">
            <Text className="m-0 text-sm font-normal text-gray-600">{attr.key}</Text>
            <Text className="mt-1 text-sm font-medium text-gray-800">{attr.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const ProductAdditionalInfoTitle = () => {
  return (
    <View className="flex-row items-center gap-3">
      <Icon as={packageIcon} size="xl" />
      <Text className="text-lr-grey-800 text-base font-medium">Additional Info</Text>
    </View>
  );
};

export const ProductAdditionalContent = ({
  additionalInfo
}: {
  additionalInfo: ProductDetailsViewModel["additionalInfo"];
}) => {
  if (!additionalInfo) return null;
  return (
    <View className="mt-4 flex w-full flex-col gap-4 px-2">
      {additionalInfo.map((attr, index) => (
        <View key={index} className="w-11/12 flex-row items-center gap-4">
          <Text
            className="m-0 text-sm font-normal text-gray-600"
            style={{ minWidth: "40%", maxWidth: "40%" }}
          >
            {attr.key}
          </Text>
          <Text className="m-0 text-sm font-medium text-gray-600">{attr.value}</Text>
        </View>
      ))}
    </View>
  );
};

const DetailsAccordion = ({
  highlights,
  additionalInfo
}: {
  highlights: ProductDetailsViewModel["highlights"];
  additionalInfo: ProductDetailsViewModel["additionalInfo"];
}) => {
  return (
    <>
      <AccordionBox variant="borderless" size="md">
        <AccordionItem>
          <AccordionHeader>
            <AccordionTrigger index={0}>
              {({ isActive }) => (
                <>
                  <AccordionTitleText>
                    <ProductHighlightsTitle />
                  </AccordionTitleText>
                  {isActive ? (
                    <AccordionIcon as={AngleUpIcon} />
                  ) : (
                    <AccordionIcon as={AngleDownIcon} />
                  )}
                </>
              )}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <ProductHighlightsContent highlights={highlights} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <AccordionTrigger index={1}>
              {({ isActive }) => (
                <>
                  <AccordionTitleText>
                    <ProductAdditionalInfoTitle />
                  </AccordionTitleText>
                  {isActive ? (
                    <AccordionIcon as={AngleUpIcon} />
                  ) : (
                    <AccordionIcon as={AngleDownIcon} />
                  )}
                </>
              )}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <ProductAdditionalContent additionalInfo={additionalInfo} />
          </AccordionContent>
        </AccordionItem>
      </AccordionBox>
    </>
  );
};

const HelpSection = () => {
  return (
    <View className="flex-row items-center gap-1">
      <View className="relative flex flex-row items-center justify-center">
        <View className="h-5 w-5 rounded-full border border-gray-500"></View>
        <Icon
          as={CallIconHOC({ fill: "#667085" })}
          size="md"
          className="absolute left-[4.75px] top-[2.8px]"
        />
      </View>
      <a
        className="text-sm font-normal leading-tight text-gray-500 underline"
        target="_blank"
        href="tel:01246650600"
      >
        Can we help you?
      </a>
    </View>
  );
};
