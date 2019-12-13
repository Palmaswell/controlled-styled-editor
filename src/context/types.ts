import { SxStyleProp } from 'theme-ui';

export interface StyleContextProps {
  readonly currentId: string;
  readonly isOpen: boolean;
  readonly styles: SxStyleProp;
  setIsOpen(isOpen: boolean): void;
  setCurrentId(id: string): void;
  setThemeStyles(styles: SxStyleProp): void;
}
