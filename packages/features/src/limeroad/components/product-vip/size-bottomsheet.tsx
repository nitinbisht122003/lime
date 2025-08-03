import { BottomSheet, BottomSheetContent, BottomSheetPortal } from "@app/ui/components/bottomsheet";
import { Button, ButtonText } from "@app/ui/components/button";
import { View } from "@app/ui/elements/view";

import { useProductVipContext } from "../../hooks/product-vip";
import { SizeSelector } from "./size-selector";

interface SizeBottomSheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  actionType: "cart" | "buy"; // To know which action triggered the sheet
  onProceed: () => void;
}

export const SizeBottomSheet = ({ isOpen, onOpenChange, onProceed }: SizeBottomSheetProps) => {
  const { selectedSize, sizeSelector } = useProductVipContext();

  return (
    <BottomSheet open={isOpen} onOpenChange={onOpenChange}>
      <BottomSheetPortal>
        <BottomSheetContent>
          <View className="flex flex-col gap-4">
            {sizeSelector && <SizeSelector sizeSelector={sizeSelector} />}

            <Button
              variant="solid"
              action="secondary"
              size="lg"
              disabled={!selectedSize}
              className="bg-lr-green-400 w-full p-2"
              onPress={onProceed}
            >
              <ButtonText className="text-lr-green-950 text-[18px]">Proceed</ButtonText>
            </Button>
          </View>
        </BottomSheetContent>
      </BottomSheetPortal>
    </BottomSheet>
  );
};
