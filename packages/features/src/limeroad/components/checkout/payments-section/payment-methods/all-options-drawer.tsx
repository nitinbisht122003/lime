import type { ComponentProps } from "react";
import { Fragment, useCallback, useState } from "react";

import type { PaymentMode, PaymentOptionViewModel } from "@app/types/limeroad";
import { Button, ButtonText } from "@app/ui/components/button";
import { Divider } from "@app/ui/components/divider";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader
} from "@app/ui/components/drawer";
import { Input, InputField, InputIcon, InputSlot } from "@app/ui/components/input";
import { RadioGroup } from "@app/ui/components/radio";
import { View } from "@app/ui/elements/view";
import { SearchIcon } from "@app/ui/icons/search-icon";

import { Header } from "../../../header";
import { Option } from "./multiple-options-payment-method";

type AllOptionsDrawerProps<T extends PaymentMode> = ComponentProps<typeof Drawer> & {
  title?: string;
  options: PaymentOptionViewModel<T>[];
  onConfirm: (option: PaymentOptionViewModel<T>) => void;
};

export const AllOptionsDrawer = <T extends PaymentMode>({
  title = "All Options",
  options,
  onConfirm,
  size = "full",
  anchor = "right",
  onClose,
  ...props
}: AllOptionsDrawerProps<T>) => {
  // hooks
  const [searchValue, setSearchValue] = useState("");
  const [selectedOptionValue, setSelectedOptionValue] = useState<string | undefined>();

  // actions
  const handleClose = useCallback(() => {
    (onClose as (() => void) | undefined)?.();
    setSelectedOptionValue(undefined);
    setSearchValue("");
  }, [onClose]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const handleOptionChange = useCallback((value: string) => {
    setSelectedOptionValue(value);
  }, []);

  const handleConfirm = useCallback(() => {
    const selectedOption = options.find((option) => option.value === selectedOptionValue);

    if (!selectedOption) return;

    onConfirm(selectedOption);
    setSelectedOptionValue(undefined);
    setSearchValue("");
  }, [onConfirm, options, selectedOptionValue]);

  // derived
  const radioValue = selectedOptionValue ?? "";

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Drawer size={size} anchor={anchor} onClose={handleClose} {...props}>
      <DrawerContent className="overflow-hidden p-0">
        <DrawerHeader>
          <Header title={title} onBack={handleClose} className="flex-1" />
        </DrawerHeader>
        <DrawerBody className="m-0 flex-1 p-4">
          <View className="flex-1 gap-6">
            {/* Search Input */}
            <Input>
              <InputSlot className="pl-3">
                <InputIcon as={SearchIcon} />
              </InputSlot>
              <InputField
                placeholder="Search options..."
                value={searchValue}
                onChangeText={handleSearchChange}
              />
            </Input>
            {/* Options */}
            <RadioGroup value={radioValue} onChange={handleOptionChange} className="gap-3">
              {filteredOptions.map((option, index) => (
                <Fragment key={option.id}>
                  {index > 0 && <Divider />}
                  <Option option={option} className="gap-2" size="md" />
                </Fragment>
              ))}
            </RadioGroup>
          </View>
        </DrawerBody>
        <DrawerFooter className="p-4">
          <Button
            action="primary"
            size="lg"
            variant="solid"
            onPress={handleConfirm}
            className="w-full"
          >
            <ButtonText>Confirm</ButtonText>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
