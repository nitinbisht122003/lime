export interface AccountDto {
  profile_image: string;
  job_title: string;
  bio?: string;
  name: string;
  followers?: number;
  following?: number;
  contact_number: string;
  barcode: BarCodeDto;
  lr_credits: number;
}

export interface BarCodeDto {
  image: string;
  description: string;
}
