export interface GoldPitchBenefit {
  icon: string;
  text: string;
}

export interface GoldPitchDto {
  text: string;
  subtext: string;
  discount: number;
  logo: string;
  benefits: GoldPitchBenefit[];
  added: boolean;
}
