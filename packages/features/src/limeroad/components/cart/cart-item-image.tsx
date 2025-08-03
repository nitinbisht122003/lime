import { Image } from "@app/ui/elements/image";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";

type ImageSize = "sm" | "md" | "lg";

const imageSizes: Record<ImageSize, { w: number; h: number }> = {
  sm: { w: 90, h: 120 },
  md: { w: 120, h: 160 },
  lg: { w: 150, h: 200 }
};

export const CartItemImage = ({
  image,
  name,
  sizeOOS = false,
  allSizeOOS = false,
  size = "md"
}: {
  image: string;
  name: string;
  sizeOOS?: boolean;
  allSizeOOS?: boolean;
  size?: ImageSize;
}) => {
  const { w, h } = imageSizes[size];

  return (
    <View className="relative">
      <Image src={image} alt={name} width={w} height={h} borderRadius="lg" />
      {/* OOS Overlay Text */}
      {sizeOOS && <OverlayText>{allSizeOOS ? "Out of Stock" : "Size Out of Stock"}</OverlayText>}
    </View>
  );
};

const OverlayText = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className="bg-cool-grey-950/50 absolute inset-0 z-10 flex items-center justify-center rounded-lg">
      <Text className="text-center text-base font-bold text-white">{children}</Text>
    </View>
  );
};
