import type { ComponentProps } from "react";
import { Fragment, useCallback, useMemo, useState } from "react";

import type { CardsPaymentMethodViewModel } from "@app/types/limeroad";
import { PaymentGateway, PaymentMode } from "@app/types/limeroad";
import { Button, ButtonIcon } from "@app/ui/components/button";
import { Divider } from "@app/ui/components/divider";
import { Icon } from "@app/ui/components/icon";
import { Input, InputField } from "@app/ui/components/input";
import { Radio, RadioGroup, RadioIcon, RadioIndicator } from "@app/ui/components/radio";
import { Pressable } from "@app/ui/elements/pressable";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { CircleIcon } from "@app/ui/icons/circle-icon";
import { PlusSquareIcon } from "@app/ui/icons/plus-square-icon";
import { TrashIcon } from "@app/ui/icons/trash-icon";
import { cn } from "@app/ui/utils/cn";

import { usePaymentsSectionContext } from "../../../../hooks/checkout/payments-section";
import { AddCardDrawer } from "./add-card-drawer";
import { PaymentMethodDescription, PaymentMethodName } from "./common";
import { SingleModePaymentMethod } from "./single-mode-payment-method";

type SavedCard = CardsPaymentMethodViewModel["cards"][number];

export interface NewCardDetails {
  number: string;
  name: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
}

type NewCard = NewCardDetails & {
  pg: PaymentGateway;
  new: boolean;
};

type Card = SavedCard | NewCard;

type CardsPaymentMethodProps = ComponentProps<typeof View> & {
  method: CardsPaymentMethodViewModel;
};

export const CardsPaymentMethod = ({ method, ...props }: CardsPaymentMethodProps) => {
  // data
  const { type, cards } = method;

  // hooks
  const { selectedPaymentMethod, setSelectedPaymentMethod } = usePaymentsSectionContext();

  // actions
  const handleOptionChange = useCallback(
    (option: string) => {
      setSelectedPaymentMethod({ type, mode: PaymentMode.CARDS, option });
    },
    [setSelectedPaymentMethod, type]
  );

  // derived
  const isSelected = selectedPaymentMethod.type === type;

  return (
    <View {...props}>
      <SingleModePaymentMethod method={method} />
      <CardOptions
        savedCards={cards}
        className="ml-11"
        onChange={handleOptionChange}
        expanded={isSelected}
      />
    </View>
  );
};

type CardOptionsProps = ComponentProps<typeof View> & {
  savedCards: SavedCard[];
  onChange: (option: string) => void;
  expanded?: boolean;
};

const CardOptions = ({
  savedCards,
  className,
  onChange,
  expanded = false,
  ...props
}: CardOptionsProps) => {
  // hooks
  const { selectedPaymentMethod } = usePaymentsSectionContext();
  const [newCards, setNewCards] = useState<NewCard[]>([]);

  // actions
  const handleOptionChange = useCallback(
    (option: string) => {
      onChange(option);
    },
    [onChange]
  );

  const handleAddNewCard = useCallback(
    (card: NewCardDetails) => {
      setNewCards((prev) => {
        const existingCard = prev.find((c) => c.number === card.number);

        if (existingCard) {
          const updatedCards = prev.map((prevCard) =>
            prevCard.number === card.number ? { ...prevCard, ...card } : prevCard
          );

          return updatedCards;
        }

        const newCard = { ...card, pg: PaymentGateway.RAZORPAY, new: true };

        return [...prev, newCard];
      });

      onChange(card.number);
    },
    [onChange]
  );

  // derived
  const radioValue = selectedPaymentMethod.option ?? "";

  const cards = useMemo(() => [...savedCards, ...newCards], [savedCards, newCards]);

  return (
    <View className={cn("gap-3", expanded ? "p-2" : "h-0 overflow-hidden", className)} {...props}>
      <RadioGroup value={radioValue} onChange={handleOptionChange} className="gap-3">
        {cards.map((card) => (
          <Fragment key={card.number}>
            <CardOption card={card} onSelect={handleOptionChange} />
            <Divider className="my-3" />
          </Fragment>
        ))}
      </RadioGroup>
      <AddNewCard onAdd={handleAddNewCard} />
    </View>
  );
};

type CardOptionProps = ComponentProps<typeof View> & {
  card: Card;
  onSelect: (option: string) => void;
};

const CardOption = ({ card, onSelect, ...props }: CardOptionProps) => {
  // data
  const { number, name } = card;

  // actions
  const handleInputFocus = useCallback(() => {
    onSelect(number);
  }, [onSelect, number]);

  // derived
  const isNewCard = "new" in card && card.new;

  const takeCvv = !isNewCard;

  return (
    <View {...props}>
      <Radio size="sm" value={number} className="items-start gap-3">
        <RadioIndicator>
          <RadioIcon as={CircleIcon} />
        </RadioIndicator>
        <View className="flex-1 flex-row items-start justify-between">
          <View className="gap-2">
            <Text className="text-lr-grey-950 text-sm">{number}</Text>
            <Text className="text-lr-grey-700 text-sm">{name}</Text>
            {takeCvv && (
              <Input size="sm" variant="underlined" className="w-20">
                <InputField placeholder="Enter CVV" onFocus={handleInputFocus} />
              </Input>
            )}
          </View>
          <Button variant="ghost" size="sm" className="h-4 px-2">
            <ButtonIcon as={TrashIcon} />
          </Button>
        </View>
      </Radio>
    </View>
  );
};

type AddNewCardProps = ComponentProps<typeof View> & {
  onAdd: (card: NewCardDetails) => void;
};

const AddNewCard = ({ onAdd, className, ...props }: AddNewCardProps) => {
  // state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // actions
  const handleAdd = useCallback(
    (card: NewCardDetails) => {
      setIsDrawerOpen(false);
      onAdd(card);
    },
    [onAdd]
  );

  return (
    <View {...props}>
      <Pressable className={cn("flex-row gap-2", className)} onPress={() => setIsDrawerOpen(true)}>
        <Icon as={PlusSquareIcon} size="sm" className="text-lr-grey-950" />
        <View className="flex-1 gap-1">
          <PaymentMethodName>Add New Card</PaymentMethodName>
          <PaymentMethodDescription>Save and Pay via Cards</PaymentMethodDescription>
        </View>
      </Pressable>
      <AddCardDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onAdd={handleAdd}
      />
    </View>
  );
};
