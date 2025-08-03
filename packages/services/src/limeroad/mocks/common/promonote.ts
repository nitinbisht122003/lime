import type { PromonoteDto } from "@app/types/limeroad";

export const promonoteMocks: PromonoteDto = {
  variant: "info",
  size: "md",
  title: "Welcome to Limeroad!",
  subtitle: "Discover amazing deals on fashion and lifestyle products",
  action_button: {
    type: "link",
    text: "Explore Now",
    variant: "outline",
    link: "https://www.limeroad.com"
  }
};
