export type PromonoteVariant = "info" | "success" | "gold";

export type PromonoteSize = "sm" | "md" | "lg";

export type PromonoteActionButtonType = "link" | "api";

export type PromonoteActionButtonVariant = "solid" | "outline";

export interface PromonoteActionApi {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  body?: Record<string, unknown>;
}

export interface PromonoteActionButton {
  type: PromonoteActionButtonType;
  text: string;
  variant: PromonoteActionButtonVariant;
  link?: string;
  api?: PromonoteActionApi;
}

export interface PromonoteDto {
  variant: PromonoteVariant;
  size: PromonoteSize;
  title?: string;
  subtitle?: string;
  action_button?: PromonoteActionButton;
}
