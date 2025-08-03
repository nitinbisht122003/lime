import { tva } from "@gluestack-ui/nativewind-utils/tva";

// Define style variants with TVA
export const headerStyle = tva({
  base: "flex-row items-center justify-between px-1.5 py-1.5",
  variants: {
    size: {
      sm: "h-11"
    },
    position: {
      fixed: "sticky top-0 z-10",
      static: ""
    },
    variant: {
      basic: "bg-header-background"
    }
  },
  defaultVariants: {
    size: "sm",
    position: "static",
    variant: "basic"
  }
});

export const headerTitleStyle = tva({
  base: "text-typography-800 text-lg"
});

export const headerLogoStyle = tva({
  base: "flex-1 flex-row items-center",
  parentVariants: {
    size: {
      sm: "h-7"
    }
  }
});

export const headerBackStyle = tva({
  base: "data-[hover=true]:bg-background-100 data-[active=true]:bg-background-200 items-center justify-center rounded-full",
  parentVariants: {
    size: {
      sm: "h-11 w-11 p-2.5"
    }
  }
});

export const headerNavStyle = tva({
  base: "flex-row items-center",
  variants: {
    spacing: {
      sm: "gap-1"
    }
  }
});

export const headerNavIconStyle = tva({
  base: "data-[hover=true]:bg-background-100 data-[active=true]:bg-background-200 items-center justify-center rounded-full",
  parentVariants: {
    size: {
      sm: "h-11 w-11 p-2.5"
    }
  }
});
