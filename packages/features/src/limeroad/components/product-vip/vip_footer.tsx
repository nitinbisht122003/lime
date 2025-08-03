import { useState } from "react";

import type {
  AddToCartActionDto,
  BuyNowActionDto,
  VipActionsViewModel,
  WishlistActionDto
} from "@app/types/limeroad";
import { Button, ButtonText } from "@app/ui/components/button";
import { Icon } from "@app/ui/components/icon";
import { View } from "@app/ui/elements/view";
import { HeartIconHOC } from "@app/ui/icons/heart-icon";
import { cn } from "@app/ui/utils/cn";

import { useProductVipContext } from "../../hooks/product-vip";
import { SizeBottomSheet } from "./size-bottomsheet";

interface VipFooterProps {
  vipActions: VipActionsViewModel;
  className?: string;
}
export const VipFooter = ({ vipActions, className }: VipFooterProps) => {
  const { actions } = vipActions;
  const wishlistAction = actions.find((action) => action.type === "wishlist");
  const mainActions = actions.filter((action) => action.type !== "wishlist");

  const { selectedSize } = useProductVipContext();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [actionType, setActionType] = useState<"cart" | "buy" | null>(null);

  const handleAction = (action: "cart" | "buy") => {
    if (!selectedSize) {
      setActionType(action);
      setIsBottomSheetOpen(true);
      return;
    }

    proceedWithAction(action);
  };

  const proceedWithAction = (action: "cart" | "buy") => {
    if (action === "cart") {
      // Call add to cart API
    } else {
      // Handle buy now
    }
    // Close bottom sheet if it was open
    setIsBottomSheetOpen(false);
    setActionType(null);
  };

  return (
    <>
      <View className={cn("w-full flex-row items-center gap-4 bg-white px-4 py-3", className)}>
        {wishlistAction && <WishlistButton wishlist={wishlistAction} />}
        <View className="w-full flex-1 flex-row items-center gap-2">
          {mainActions.map((action) => {
            switch (action.type) {
              case "add_to_cart":
                return <AddToCartButton action={action} onAction={handleAction} />;
              case "buy_now":
                return <BuyNowButton action={action} onAction={handleAction} />;
              default:
                return null;
            }
          })}
        </View>
      </View>

      {/* Size Selection Bottom Sheet */}
      {actionType && (
        <SizeBottomSheet
          isOpen={isBottomSheetOpen}
          onOpenChange={setIsBottomSheetOpen}
          actionType={actionType}
          onProceed={() => proceedWithAction(actionType)}
        />
      )}
    </>
  );
};

const WishlistButton = ({ wishlist }: { wishlist: WishlistActionDto }) => {
  return (
    <Button
      variant="solid"
      action="secondary"
      size="lg"
      className="bg-lr-grey-100 h-11 w-11 rounded-full"
    >
      <View className="flex flex-row items-center justify-center">
        {wishlist.is_wishlisted ? (
          <Icon
            as={HeartIconHOC({ fill: "#B42318", stroke: "none" })}
            size="xl"
            className="h-6 w-6"
          />
        ) : (
          <Icon as={HeartIconHOC({ fill: "none" })} size="xl" className="h-6 w-6" />
        )}
      </View>
    </Button>
  );
};

interface AddToCartButtonProps {
  action: AddToCartActionDto;
  onAction: (action: "cart" | "buy") => void;
}

const AddToCartButton = ({ action, onAction }: AddToCartButtonProps) => {
  return (
    <Button
      variant="solid"
      action="secondary"
      size="lg"
      className="bg-lr-grey-25 border-lr-green-950 w-[50%] border p-2"
      onPress={() => onAction("cart")}
    >
      <ButtonText className="text-lr-green-950 text-[18px]">{action.text}</ButtonText>
    </Button>
  );
};

interface BuyNowButtonProps {
  action: BuyNowActionDto;
  onAction: (action: "cart" | "buy") => void;
}

const BuyNowButton = ({ action, onAction }: BuyNowButtonProps) => {
  return (
    <Button
      variant="solid"
      action="secondary"
      size="lg"
      className="bg-lr-green-400 w-[50%] p-2"
      onPress={() => onAction("buy")}
    >
      <ButtonText className="text-lr-green-950 text-[18px]">{action.text}</ButtonText>
    </Button>
  );
};
