type FormElementType = "input" | "button";

export interface FormBaseElementDto {
  type: FormElementType;
}

export type FormInputType = "text" | "number" | "async_select" | "radio_group";

export interface FormBaseInputElementDto extends FormBaseElementDto {
  type: "input";
  input_type: FormInputType;
  label: string;
  name: string;
  placeholder?: string;
  value?: unknown;
  required?: boolean;
}

export interface PatternDto {
  regex: string;
  err_msg: string;
}

export interface FormTextInputElementDto extends FormBaseInputElementDto {
  input_type: "text";
  value?: string;
  min_length?: number;
  max_length?: number;
  pattern?: PatternDto;
}

export interface FormNumberInputElementDto extends FormBaseInputElementDto {
  input_type: "number";
  value?: number;
  min?: number;
  max?: number;
  pattern?: PatternDto;
}

export interface FormAsyncSelectInputElementDto extends FormBaseInputElementDto {
  input_type: "async_select";
  api_endpoint: string;
  value?: string;
}

export interface FormRadioGroupInputElementDto extends FormBaseInputElementDto {
  input_type: "radio_group";
  options: {
    label: string;
    value: string;
  }[];
}

export type FormInputElementDto =
  | FormTextInputElementDto
  | FormNumberInputElementDto
  | FormAsyncSelectInputElementDto;

export interface FormButtonElementDto extends FormBaseElementDto {
  type: "button";
  label: string;
  action: "primary" | "secondary";
  variant: "solid" | "outline" | "ghost";
  size: "sm" | "md" | "lg";
}

export type FormElementDto = FormInputElementDto | FormButtonElementDto;

export interface FormRowDto {
  elements: FormElementDto[];
  type: "row";
}

export interface FormDto {
  rows: FormRowDto[];
}
