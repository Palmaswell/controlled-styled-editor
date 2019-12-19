import { SxStyleProp } from 'theme-ui';

export interface StyleContextProps {
  readonly currentId: string;
  readonly isOpen: boolean;
  readonly editorProps: SxStyleProp;
  readonly selectInputValue: string;
  readonly styleMap: Map<string, SxStyleProp>;
  readonly clearSelect: boolean;
  setIsOpen(isOpen: boolean): void;
  setCurrentId(id: string): void;
  setEditorProps(styles: SxStyleProp): void;
  setSelectInputValue(value: string): void;
  setStyleMap(map: Map<string, SxStyleProp>): void;
  setClearSelect(clear: boolean): void;
}

export interface Color {
  name: string;
  rgb: RGB;
  ratio?: number;
}

export type RGB = [number, number, number];

export enum YValues {
  r = 0.2126,
  g = 0.7152,
  b = 0.0722,
}

export enum A11yRatio {
  aa = 4.5,
  aaa = 7,
}
