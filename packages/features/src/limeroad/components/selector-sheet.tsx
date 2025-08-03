import type { ComponentProps, FC } from "react";
import { useCallback, useEffect, useState } from "react";

import type { Option } from "@app/types/limeroad";
import type { ISelectorSheetTriggerProps } from "@app/ui/components/selector-sheet";
import { ButtonText } from "@app/ui/components/button";
import { Icon } from "@app/ui/components/icon";
import {
  SelectorBottomSheet,
  SelectorBottomSheetBody,
  SelectorBottomSheetClose,
  SelectorBottomSheetContent,
  SelectorBottomSheetHeader,
  SelectorBottomSheetTitle,
  SelectorConfirmationButton,
  SelectorOption,
  SelectorOptionLabel,
  SelectorOptions,
  SelectorSheetTrigger,
  SelectorSheetValue,
  SelectorSheet as UISelectorSheet
} from "@app/ui/components/selector-sheet";
import { Text } from "@app/ui/elements/text";
import { ChevronDownIcon } from "@app/ui/icons/chevron-down-icon";
import { XIcon } from "@app/ui/icons/x-icon";

type SelectorSheetProps = ComponentProps<typeof UISelectorSheet> & {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  options: Option[];
  value?: Option["value"];
  onChange: (value: Option["value"]) => void;
  title?: string;
  confirmLabel?: string;
  triggerSize?: ISelectorSheetTriggerProps["size"];
};

export const SelectorSheet: FC<SelectorSheetProps> = ({
  open,
  onOpenChange,
  options,
  value,
  onChange,
  title = "Select Option",
  confirmLabel = "Confirm",
  size = "md",
  triggerSize,
  ...props
}) => {
  const [tempValue, setTempValue] = useState(value);

  useEffect(() => {
    setTempValue(value);

    // Reset tempValue when component unmounts
    return () => {
      setTempValue(value);
    };
  }, [value]);

  const handleValueChange = useCallback((value: Option["value"]) => {
    setTempValue(value);
  }, []);

  const handleOpenChange = useCallback(
    (open: boolean) => {
      onOpenChange?.(open);

      if (!open) {
        setTempValue(value);
      }
    },
    [value, onOpenChange]
  );

  const handleConfirm = useCallback(() => {
    if (!tempValue) return;

    onChange(tempValue);
  }, [tempValue, onChange]);

  const selectedOption = options.find((o) => o.value === value);

  const triggerIconSize = triggerSize ?? size;

  return (
    <UISelectorSheet size={size} {...props}>
      <SelectorSheetTrigger size={triggerSize} onPress={() => onOpenChange?.(true)}>
        <SelectorSheetValue size={triggerSize}>
          <Text>{selectedOption?.label ?? "Select"}</Text>
          <Icon as={ChevronDownIcon} size={triggerIconSize} />
        </SelectorSheetValue>
      </SelectorSheetTrigger>
      <SelectorBottomSheet open={open} onOpenChange={handleOpenChange}>
        <SelectorBottomSheetContent>
          <SelectorBottomSheetHeader>
            <SelectorBottomSheetTitle>{title}</SelectorBottomSheetTitle>
            <SelectorBottomSheetClose>
              <Icon as={XIcon} size="2xs" />
            </SelectorBottomSheetClose>
          </SelectorBottomSheetHeader>
          <SelectorBottomSheetBody>
            <SelectorOptions value={tempValue} onChange={handleValueChange}>
              {options.map((option) => (
                <SelectorOption
                  key={option.value}
                  value={option.value}
                  isDisabled={option.disabled}
                >
                  <SelectorOptionLabel>{option.label}</SelectorOptionLabel>
                </SelectorOption>
              ))}
            </SelectorOptions>
            <SelectorConfirmationButton onPress={handleConfirm}>
              <ButtonText>{confirmLabel}</ButtonText>
            </SelectorConfirmationButton>
          </SelectorBottomSheetBody>
        </SelectorBottomSheetContent>
      </SelectorBottomSheet>
    </UISelectorSheet>
  );
};
