"use client";

import type { ComponentProps } from "react";
import { useCallback } from "react";

import type { CouponViewModel } from "@app/types/limeroad";
import { Drawer, DrawerBody, DrawerContent, DrawerHeader } from "@app/ui/components/drawer";
import { View } from "@app/ui/elements/view";

import { Header } from "../header";
import { AllCoupons } from "./all-coupons";

type AllCouponsDrawerProps = ComponentProps<typeof Drawer> & {
  onClose?: () => void;
  title?: string;
  coupons: CouponViewModel[];
  onApplyCoupon?: ({ couponCode, success }: { couponCode: string; success: boolean }) => void;
  onRemoveCoupon?: ({ couponCode, success }: { couponCode: string; success: boolean }) => void;
};

export function AllCouponsDrawer({
  title = "Coupons",
  coupons,
  size = "full",
  anchor = "right",
  onClose,
  onApplyCoupon,
  onRemoveCoupon,
  ...props
}: AllCouponsDrawerProps) {
  // actions
  const handleClose = useCallback(() => {
    (onClose as (() => void) | undefined)?.();
  }, [onClose]);

  return (
    <Drawer size={size} anchor={anchor} onClose={handleClose} {...props}>
      <DrawerContent className="overflow-hidden p-0">
        <DrawerHeader>
          <Header title={title} onBack={handleClose} className="flex-1" />
        </DrawerHeader>
        <DrawerBody className="m-0 flex-1 p-4">
          <View className="flex-1">
            <AllCoupons
              coupons={coupons}
              onApplyCoupon={onApplyCoupon}
              onRemoveCoupon={onRemoveCoupon}
            />
          </View>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
