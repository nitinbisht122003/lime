"use client";

import type { ComponentProps } from "react";
import { useCallback, useState } from "react";

import { removeExtraSpace, removeSpace } from "@app/core/utils";
import { Button, ButtonText } from "@app/ui/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader
} from "@app/ui/components/drawer";
import { Icon } from "@app/ui/components/icon";
import { Input, InputField } from "@app/ui/components/input";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { SolidCrossIconHOC } from "@app/ui/icons/solid-cross-icon";

import type { NewCardDetails } from "./cards-payment-method";
import { Header } from "../../../header";

export interface CardFormData {
  number: string;
  name: string;
  expiry: string;
  cvv: string;
}

export type CardFormInput = keyof CardFormData;

export type CardFormErrors = Partial<Record<CardFormInput, string>>;

export interface AddCardDrawerProps extends ComponentProps<typeof Drawer> {
  onAdd: (card: NewCardDetails) => void;
}

export function AddCardDrawer({
  onAdd,
  size = "full",
  anchor = "right",
  onClose,
  ...props
}: AddCardDrawerProps) {
  // hooks
  const [formData, setFormData] = useState<CardFormData>({
    number: "",
    name: "",
    expiry: "",
    cvv: ""
  });

  const [errors, setErrors] = useState<CardFormErrors>({});

  // actions
  const updateFormData = useCallback((field: CardFormInput, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      number: "",
      name: "",
      expiry: "",
      cvv: ""
    });
    setErrors({});
  }, []);

  const validateForm = useCallback(() => {
    const { valid, errors } = validateCardDetails(formData);

    if (!valid) {
      setErrors(errors);
      return false;
    }

    return true;
  }, [formData]);

  const handleSave = useCallback(() => {
    if (validateForm()) {
      onAdd(parseCardDetails(formData));
      resetForm();
    }
  }, [validateForm, onAdd, formData, resetForm]);

  const handleClose = useCallback(() => {
    (onClose as (() => void) | undefined)?.();
    resetForm();
  }, [onClose, resetForm]);

  return (
    <Drawer size={size} anchor={anchor} onClose={handleClose} {...props}>
      <DrawerContent className="overflow-hidden p-0">
        <DrawerHeader>
          <Header title="Add a Card" onBack={handleClose} className="flex-1" />
        </DrawerHeader>
        <DrawerBody className="flex-1 px-4">
          <View>
            <View className="flex-row items-center">
              <Text className="text-lr-grey-600 text-sm">Card Number</Text>
              <Text className="text-lr-grey-600 ml-1 text-sm">*</Text>
            </View>
            <Input
              variant="outline"
              size="xl"
              className="mt-4 w-full rounded-lg p-3"
              isInvalid={!!errors.number}
            >
              <InputField
                id="card-number"
                type="text"
                inputMode="numeric"
                placeholder="eg: 1234 5678 9012 3456"
                maxLength={23}
                autoComplete="cc-number"
                value={formData.number}
                onChangeText={(text) => updateFormData("number", text)}
                className="text-base"
              />
            </Input>
            {errors.number && (
              <View className="mt-2 flex-row items-center">
                <Icon as={SolidCrossIconHOC({ fill: "#912018" })} size="sm" />
                <Text className="ml-1 text-base text-[#912018]">{errors.number}</Text>
              </View>
            )}
          </View>

          <View className="mt-5 flex flex-row gap-4">
            <View className="flex flex-1 flex-col">
              <View className="flex-row items-center">
                <Text className="text-lr-grey-600 text-sm">Expiry Date (MM/YY)</Text>
                <Text className="text-lr-grey-600 ml-1 text-sm">*</Text>
              </View>
              <Input
                variant="outline"
                size="xl"
                className="mt-4 w-full rounded-lg p-3"
                isInvalid={!!errors.expiry}
              >
                <InputField
                  id="exp"
                  type="text"
                  inputMode="numeric"
                  placeholder="eg: 12/25"
                  maxLength={5}
                  autoComplete="cc-exp"
                  value={formData.expiry}
                  onChangeText={(text) => {
                    let value = text.replace(/[^0-9/]/g, "");
                    if (/^\d\/$/.test(value)) {
                      value = `0${value}`;
                    } else if (/^(\d)\/(\d{0,2})$/.test(value)) {
                      value = value.replace(/^(\d)\/(\d{0,2})$/, (m, m1, m2) => `0${m1}/${m2}`);
                    } else if (value.length > 2 && value[2] !== "/") {
                      value = value.slice(0, 2) + "/" + value.slice(2, 4);
                    }
                    const firstSlash = value.indexOf("/");
                    if (firstSlash !== -1) {
                      value =
                        value.slice(0, firstSlash + 1) +
                        value.slice(firstSlash + 1).replace(/\//g, "");
                    }
                    updateFormData("expiry", value.slice(0, 5));
                  }}
                  className="text-base"
                />
              </Input>
              {errors.expiry && (
                <View className="mt-2 flex-row items-center">
                  <Icon as={SolidCrossIconHOC({ fill: "#912018" })} size="sm" />
                  <Text className="ml-1 text-base text-[#912018]">{errors.expiry}</Text>
                </View>
              )}
            </View>
            <View className="flex flex-1 flex-col">
              <View className="flex-row items-center">
                <Text className="text-lr-grey-600 text-sm">CVV number *</Text>
              </View>
              <Input
                variant="outline"
                size="xl"
                className="mt-4 w-full rounded-lg p-3"
                isInvalid={!!errors.cvv}
              >
                <InputField
                  id="cvv"
                  type="password"
                  placeholder="eg: 123"
                  maxLength={4}
                  autoComplete="cc-csc"
                  value={formData.cvv}
                  onChangeText={(text) => updateFormData("cvv", text)}
                  className="text-base"
                />
              </Input>
              {errors.cvv && (
                <View className="mt-2 flex-row items-center">
                  <Icon as={SolidCrossIconHOC({ fill: "#912018" })} size="sm" />
                  <Text className="ml-1 text-base text-[#912018]">{errors.cvv}</Text>
                </View>
              )}
            </View>
          </View>

          <View className="mt-5">
            <View className="flex-row items-center">
              <Text className="text-lr-grey-600 text-sm">Name on Card</Text>
              <Text className="text-lr-grey-600 ml-1 text-sm">*</Text>
            </View>
            <Input
              variant="outline"
              size="xl"
              className="mt-4 w-full rounded-lg p-3"
              isInvalid={!!errors.name}
            >
              <InputField
                id="card-name"
                type="text"
                placeholder="eg: John Doe"
                maxLength={100}
                autoComplete="cc-name"
                value={formData.name}
                onChangeText={(text) => updateFormData("name", text)}
                className="text-base"
              />
            </Input>
            {errors.name && (
              <View className="mt-2 flex-row items-center">
                <Icon as={SolidCrossIconHOC({ fill: "#912018" })} size="sm" />
                <Text className="ml-1 text-base text-[#912018]">{errors.name}</Text>
              </View>
            )}
          </View>
        </DrawerBody>
        <DrawerFooter className="p-4">
          <Button
            action="primary"
            size="lg"
            variant="solid"
            className="w-full"
            onPress={handleSave}
          >
            <ButtonText>Save Card</ButtonText>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

const parseCardNumber = (number: string) => removeSpace(number);

const parseCardName = (name: string) => removeExtraSpace(name);

const parseExpiry = (expiry: string) => {
  const cardExpiry = removeSpace(expiry);

  const [mm, yy] = cardExpiry.split("/");

  const month = parseInt(mm ?? "", 10);
  const year = parseInt(yy ?? "", 10);

  return { month, year };
};

const parseCvv = (cvv: string) => removeSpace(cvv);

const parseCardDetails = (formData: CardFormData): NewCardDetails => {
  return {
    number: parseCardNumber(formData.number),
    name: parseCardName(formData.name),
    expiryMonth: parseExpiry(formData.expiry).month.toString().padStart(2, "0"),
    expiryYear: parseExpiry(formData.expiry).year.toString().padStart(2, "0"),
    cvv: parseCvv(formData.cvv)
  };
};

const validateCardNumber = (number: string) => {
  const cardNumber = parseCardNumber(number);

  if (!/^[0-9]{16,23}$/.test(cardNumber)) return false;

  return true;
};

const validateCardName = (name: string) => {
  const cardName = parseCardName(name);

  if (cardName === "") return false;

  return true;
};

const validateExp = (expiry: string) => {
  const { month, year } = parseExpiry(expiry);

  if (Number.isNaN(month) || Number.isNaN(year)) return false;

  if (month < 1 || month > 12) return false;

  const now = new Date();
  const currentYear = now.getFullYear() % 100;
  const currentMonth = now.getMonth() + 1;

  if (year < currentYear || (year === currentYear && month < currentMonth)) return false;

  return true;
};

const validateCvv = (cvv: string) => {
  const cardCvv = parseCvv(cvv);

  if (!/^\d{3,4}$/.test(cardCvv)) return false;

  return true;
};

export const validateCardDetails = (formData: CardFormData) => {
  const errors: CardFormErrors = {};

  let valid = true;

  if (!validateCardNumber(formData.number)) {
    errors.number = "Valid card number is required";
    valid = false;
  }

  if (!validateCardName(formData.name)) {
    errors.name = "Name on card is required";
    valid = false;
  }

  if (!validateExp(formData.expiry)) {
    errors.expiry = "Expiry must be MM/YY";
    valid = false;
  }

  if (!validateCvv(formData.cvv)) {
    errors.cvv = "CVV must be 3 or 4 digits";
    valid = false;
  }

  return { valid, errors };
};
