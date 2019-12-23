export interface Color {
  name: string;
  rgb: RGB;
  ratio?: number;
}

export type RGB = [number, number, number];
export type ComplianceLevel = 'AA' | 'AAA' | 'not compliant' | '';

export enum YValues {
  r = 0.2126,
  g = 0.7152,
  b = 0.0722,
}

export enum ContrastRatio {
  aa = 4.5,
  aaa = 7,
}
