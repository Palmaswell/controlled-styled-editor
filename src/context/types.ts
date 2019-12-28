import { SxStyleProp } from 'theme-ui';

export interface StyleContextProps {
  readonly currentId: string;
  readonly isOpen: boolean;
  readonly editorProps: SxStyleProp;
  readonly selectInputValue: string;
  readonly styleMap: Map<string, SxStyleProp>;
  readonly clearSelect: boolean;
  readonly theme: {};
  setIsOpen(isOpen: boolean): void;
  setCurrentId(id: string): void;
  setEditorProps(styles: SxStyleProp): void;
  setSelectInputValue(value: string): void;
  setStyleMap(map: Map<string, SxStyleProp>): void;
  setClearSelect(clear: boolean): void;
}

