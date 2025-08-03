"use client";

import type { ComponentProps } from "react";
import { useState } from "react";

import type { EddCheckerViewModel, ServiceabilityDto } from "@app/types/limeroad";
import { Icon } from "@app/ui/components/icon";
import { Input, InputField } from "@app/ui/components/input";
import { Pressable } from "@app/ui/elements/pressable";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { SolidCrossIconHOC } from "@app/ui/icons/solid-cross-icon";
import { SuccessIconHOC } from "@app/ui/icons/success-icon";
import { cn } from "@app/ui/utils/cn";

import { CustomerPromises } from "./customer-promises";

type EddCheckerProps = {
  data: EddCheckerViewModel;
  className?: string;
} & ComponentProps<typeof View>;

interface EddCheckerResponseDto {
  edd: string;
  serviceability: ServiceabilityDto;
  defaulteddText: string;
}

async function getDeliveryServiceability(
  productId: string,
  pincode: string
): Promise<EddCheckerResponseDto> {
  if (!productId || !pincode) {
    throw new Error("Product ID and pincode are required");
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  if (pincode === "110001") {
    return {
      serviceability: {
        status_code: 1,
        status_message: "Prepaid only"
      },
      edd: "Tue,17 June",
      defaulteddText: "Expected delivery in 3 to 6 days"
    };
  }
  return {
    serviceability: {
      status_code: 0,
      status_message: "Not servicable"
    },
    edd: "-1",
    defaulteddText: "Expected delivery in 3 to 6 days"
  };
}
export function EddChecker({ data, className }: EddCheckerProps) {
  const { pincode, product_id, edd, serviceability, promises, defaulteddText } = data;
  const [inputPincode, setPincode] = useState(pincode?.toString() ?? "");
  const [checkButton, setCheckButton] = useState(!pincode);
  const [responseObj, setResponseObj] = useState<EddCheckerResponseDto>({
    defaulteddText: defaulteddText ?? "",
    edd: edd ?? "",
    serviceability: serviceability ?? { status_code: 0, status_message: "" }
  });
  const handleInputChange = (val: string) => {
    const numericValue = val.replace(/[^0-9]/g, "").slice(0, 6);
    setPincode(numericValue);
    setCheckButton(true);
  };

  const handleCheck = async () => {
    if (!checkButton) {
      setPincode("");
      setCheckButton(true);
    } else {
      if (inputPincode.length < 6) {
        console.log("Please enter a valid 6-digit pincode");
        return;
      }
      setCheckButton(false);
      await getDeliveryServiceability(product_id, inputPincode)
        .then((result: EddCheckerResponseDto) => {
          setResponseObj(result);
        })
        .catch(() => {
          throw new Error("Error in api calling");
        });
    }
  };

  return (
    <View className={cn("flex justify-center gap-6", className)}>
      <EDDCheckerForm
        inputPincode={inputPincode}
        handleInputChange={handleInputChange}
        handleCheck={handleCheck}
        responseObj={responseObj}
        checkButton={checkButton}
      />
      {promises && <CustomerPromises data={promises} />}
    </View>
  );
}

const EDDCheckerForm = ({
  inputPincode,
  handleInputChange,
  handleCheck,
  responseObj,
  checkButton,
  DefaultErrorText = "Sorry, we do not deliver to this pincode. Try another!"
}: {
  inputPincode: string;
  handleInputChange: (val: string) => void;
  handleCheck: () => void;
  responseObj: EddCheckerResponseDto;
  checkButton: boolean;
  DefaultErrorText?: string;
}) => {
  return (
    <View>
      <Text className="text-md text-lr-grey-600 mb-5 font-medium">Check Delivery Date</Text>
      <View className="mb-2 justify-center">
        <Input
          className="border-lr-grey-400 bg-lr-grey-25 border-0 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
          size="sm"
        >
          <InputField
            className="border-lr-grey-400 bg-lr-grey-25 border-0 focus:border-0 focus:outline-none focus:ring-0"
            placeholder="eg: 400053"
            keyboardType="numeric"
            maxLength={6}
            value={inputPincode}
            onChangeText={handleInputChange}
          />
        </Input>
        <Pressable
          className="border-lr-grey-300 text-lr-grey-500 absolute right-1 w-[64px] border-l px-2 text-center text-sm font-medium"
          onPress={handleCheck}
        >
          <Text>{checkButton ? "Check" : "Change"}</Text>
        </Pressable>
      </View>
      {responseObj.edd === "-1" ? (
        <ErrorText status_message={DefaultErrorText} />
      ) : (
        <SuccessText edd={responseObj.edd} defaultText={responseObj.defaulteddText} />
      )}
    </View>
  );
};

const SuccessText = ({ edd, defaultText }: { edd: string; defaultText: string }) => (
  <View className="flex-row items-center gap-2">
    <Icon as={SuccessIconHOC({ fill: "#99CC33" })} height={16} width={16} />
    <Text className="text-md text-lr-grey-600">{edd === "" ? defaultText : "Delivery by"}</Text>
    <Text className="text-md text-lr-green-500">{edd}</Text>
  </View>
);

const ErrorText = ({ status_message }: { status_message: string }) => (
  <View className="flex-row items-center gap-2">
    <Icon as={SolidCrossIconHOC({ fill: "#912018" })} height={16} width={16} fill="red" />
    <Text className="text-md text-lr-red-600 font-medium">{status_message}</Text>
  </View>
);
