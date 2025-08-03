import type { ComponentProps } from "react";
import { useState } from "react";

import type { CreditsSectionViewModel } from "@app/types/limeroad";
import { Button, ButtonIcon } from "@app/ui/components/button";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel
} from "@app/ui/components/checkbox";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { CheckIcon } from "@app/ui/icons/check-icon";
import { InfoIcon } from "@app/ui/icons/info-icon";
import { cn } from "@app/ui/utils/cn";

import { CreditsInfoSheet } from "./credits-info-sheet";

type CreditsSectionProps = ComponentProps<typeof View> & {
  data: CreditsSectionViewModel;
};
export const CreditsSection = ({ data, className, ...props }: CreditsSectionProps) => {
  const {
    title,
    applied = false,
    totalApplicableCredits,
    applicableCredits,
    nonApplicableCredits
  } = data;

  const [checked, setChecked] = useState(applied);
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <>
      <View className={cn("flex-row items-center justify-between px-2", className)} {...props}>
        <View className="flex-row items-center gap-2">
          <Checkbox size="md" value="credits" isChecked={checked} onChange={setChecked}>
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>{title}</CheckboxLabel>
          </Checkbox>
          <Button action="default" size="xs" variant="ghost" onPress={() => setInfoOpen(true)}>
            <ButtonIcon as={InfoIcon} />
          </Button>
        </View>
        <Text className="text-lr-grey-950 text-sm">₹{totalApplicableCredits} Credits</Text>
      </View>
      <CreditsInfoSheet
        title={title}
        open={infoOpen}
        onOpenChange={setInfoOpen}
        total={totalApplicableCredits}
        applicableCredits={applicableCredits}
        nonApplicableCredits={nonApplicableCredits}
      />
    </>
  );
};
