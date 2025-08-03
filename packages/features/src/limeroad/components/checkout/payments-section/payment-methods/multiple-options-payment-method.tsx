import type { ComponentProps } from "react";
import { useCallback, useState } from "react";

import type {
  MultipleOptionsPaymentMethodViewModel,
  PaymentMethodType,
  PaymentMode,
  PaymentOptionViewModel
} from "@app/types/limeroad";
import { Button, ButtonText } from "@app/ui/components/button";
import { Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel } from "@app/ui/components/radio";
import { Pressable } from "@app/ui/elements/pressable";
import { View } from "@app/ui/elements/view";
import { CircleIcon } from "@app/ui/icons/circle-icon";
import { cn } from "@app/ui/utils/cn";

import { usePaymentsSectionContext } from "../../../../hooks/checkout/payments-section";
import { AllOptionsDrawer } from "./all-options-drawer";
import {
  CheckCircle,
  PaymentMethodDescription,
  PaymentMethodIcon,
  PaymentMethodName
} from "./common";

type MultipleOptionsPaymentMethodProps<T extends PaymentMode> = ComponentProps<typeof View> & {
  method: MultipleOptionsPaymentMethodViewModel<T>;
  optionsPanelChildren?: React.ReactNode;
};

export const MultipleOptionsPaymentMethod = <T extends PaymentMode>({
  method,
  className,
  children,
  optionsPanelChildren,
  ...props
}: MultipleOptionsPaymentMethodProps<T>) => {
  // data
  const { type, icon, name, description, options, max_options, expanded } = method;

  // hooks
  const { selectedPaymentMethod, setSelectedPaymentMethod } = usePaymentsSectionContext();

  // actions
  const handlePress = () => {
    setSelectedPaymentMethod({ type });
  };

  const handleOptionChange = (option: PaymentOptionViewModel<T>) => {
    setSelectedPaymentMethod({ type, mode: option.mode, option: option.value });
  };

  // derived
  const isSelected = selectedPaymentMethod.type === type;

  const showOptions = expanded === true || isSelected;

  return (
    <View className={cn("px-3 py-2", className)} {...props}>
      {/* Header */}
      <Pressable className="flex-row items-center justify-between" onPress={handlePress}>
        <View className="flex-row items-center gap-2">
          <PaymentMethodIcon icon={icon} />
          <View className="gap-1">
            <PaymentMethodName>{name}</PaymentMethodName>
            {description && <PaymentMethodDescription>{description}</PaymentMethodDescription>}
          </View>
        </View>
        {!expanded && <CheckCircle checked={isSelected} />}
      </Pressable>
      {/* Options */}
      <OptionsPanel
        options={options}
        maxOptions={max_options}
        expanded={showOptions}
        className="ml-10"
        onChange={handleOptionChange}
      >
        {optionsPanelChildren}
      </OptionsPanel>
      {/* Children */}
      {children}
    </View>
  );
};

const drawerTitleMap: Record<PaymentMethodType, string> = {
  cod: "COD Options",
  upi: "UPI Options",
  cards: "Card Options",
  wallets: "Wallet Options",
  netbanking: "Netbanking Options"
};

type OptionsPanelProps<T extends PaymentMode> = ComponentProps<typeof View> & {
  options: PaymentOptionViewModel<T>[];
  maxOptions?: number;
  expanded?: boolean;
  onChange: (option: PaymentOptionViewModel<T>) => void;
};

const OptionsPanel = <T extends PaymentMode>({
  options,
  maxOptions,
  expanded = false,
  className,
  onChange,
  children
}: OptionsPanelProps<T>) => {
  // hooks
  const { selectedPaymentMethod } = usePaymentsSectionContext();
  const [showAllOptions, setShowAllOptions] = useState(false);
  const [drawerSelectedOption, setDrawerSelectedOption] = useState<
    PaymentOptionViewModel<T> | undefined
  >();

  // actions
  const handleOptionChange = useCallback(
    (value: string) => {
      const selectedOption = options.find((option) => option.value === value);

      if (!selectedOption) return;

      onChange(selectedOption);
    },
    [onChange, options]
  );

  const handleViewMore = useCallback(() => {
    setShowAllOptions(true);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setShowAllOptions(false);
  }, []);

  const handleConfirm = useCallback(
    (option: PaymentOptionViewModel<T>) => {
      onChange(option);
      setDrawerSelectedOption(option);
      setShowAllOptions(false);
    },
    [onChange]
  );

  // derived
  const radioValue = selectedPaymentMethod.option ?? "";

  const maxOptionsCount = maxOptions ?? options.length;

  const maxVisibleOptions = options.slice(0, maxOptionsCount);

  const visibleOptions =
    drawerSelectedOption &&
    maxVisibleOptions.find((option) => option.value === drawerSelectedOption.value) === undefined
      ? [...maxVisibleOptions, drawerSelectedOption]
      : maxVisibleOptions;

  const showMore = options.length > maxOptionsCount;

  const drawerTitle = selectedPaymentMethod.type
    ? drawerTitleMap[selectedPaymentMethod.type]
    : undefined;

  return (
    <View className={cn(expanded ? "mt-3" : "h-0 overflow-hidden", className)}>
      <View className="gap-2">
        <RadioGroup value={radioValue} onChange={handleOptionChange} className="gap-5">
          {visibleOptions.map((option) => (
            <Option key={option.id} option={option} />
          ))}
        </RadioGroup>
        {showMore && (
          <>
            <Button
              action="secondary"
              variant="ghost"
              size="sm"
              className="w-20"
              onPress={handleViewMore}
            >
              <ButtonText>View more</ButtonText>
            </Button>
            <AllOptionsDrawer
              title={drawerTitle}
              options={options}
              isOpen={showAllOptions}
              onClose={handleDrawerClose}
              onConfirm={handleConfirm}
            />
          </>
        )}
      </View>
      {children}
    </View>
  );
};

type OptionProps<T extends PaymentMode> = Omit<ComponentProps<typeof Radio>, "value"> & {
  option: MultipleOptionsPaymentMethodViewModel<T>["options"][number];
};

export const Option = <T extends PaymentMode>({
  option,
  size = "sm",
  className,
  ...props
}: OptionProps<T>) => {
  // data
  const { icon, name, value } = option;

  return (
    <Radio {...props} size={size} value={value} className={cn("gap-1.5", className)}>
      <RadioIndicator>
        <RadioIcon as={CircleIcon} />
      </RadioIndicator>
      <PaymentMethodIcon icon={icon} className="h-4 w-4 border-0 p-0" />
      <RadioLabel>{name}</RadioLabel>
    </Radio>
  );
};
