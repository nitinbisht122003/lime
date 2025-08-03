"use client";

import type { ComponentProps, FC } from "react";

import type { GoldPitchDto } from "@app/types/limeroad";
import { Button, ButtonText } from "@app/ui/components/button";
import { Image } from "@app/ui/elements/image";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { cn } from "@app/ui/utils/cn";

const GOLD = {
  gradient:
    "bg-[linear-gradient(102.08deg,#d0994d_-3.38%,#d49e4e_4.29%,#e3af54_11.97%,#fac95d_23.48%,#ffcf5f_25.4%,#fffacb_42.67%,#fff9b1_56.1%,#ffcd59_65.7%,#d0994d_90.64%,#f1dd94_111.75%,#fff9b1_121.34%,#fffacb_146.29%,#fffacb_152.05%,#ffcd59_165.48%,#d0994d_186.59%)]",
  border: "border border-[#e8b454]",
  background: "bg-[rgba(253,241,201,1)]"
} as const;

const Benefit: FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <View className="flex-row items-center gap-1">
    <Image src={icon} alt="benefit logo" size="3xs" />
    <Text className="text-sm">{text}</Text>
  </View>
);

const PromoContent: FC<{ logo: string; text: string; subtext: string }> = ({
  logo,
  text,
  subtext
}) => (
  <View className="flex-row items-center gap-2">
    <Image src={logo} alt="gold pitch logo" size="xs" />
    <View>
      <Text className="text-lr-grey-950 text-base font-bold">{text}</Text>
      <Text className="text-lr-grey-950 mt-1 text-sm">{subtext}</Text>
    </View>
  </View>
);

type GoldPitchProps = ComponentProps<typeof View> & {
  data: GoldPitchDto;
};

export const GoldPitch: FC<GoldPitchProps> = ({ data, ...props }) => {
  const { logo, text, subtext, benefits, added } = data;

  return (
    <View {...props}>
      <View className={cn("rounded-lg p-4", GOLD.background)}>
        {/* Promo Content */}
        <View className="flex-row items-center justify-between">
          <PromoContent logo={logo} text={text} subtext={subtext} />
          <Button
            size="sm"
            className={cn(GOLD.gradient, GOLD.border, "rounded-lg px-5 py-2")}
            onPress={() => {
              // TODO: Add logic to add or remove gold pitch
            }}
          >
            <ButtonText className="text-lr-grey-950 text-sm font-semibold">
              {added ? "Remove" : "Add"}
            </ButtonText>
          </Button>
        </View>
      </View>
      {/* Benefits */}
      <View className="mt-2.5 gap-2.5">
        {benefits.map((benefit, index) => (
          <Benefit key={index} icon={benefit.icon} text={benefit.text} />
        ))}
      </View>
    </View>
  );
};
