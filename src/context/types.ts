import { SxStyleProp } from 'theme-ui';

export interface StyleContextProps {
  readonly currentId: string;
  readonly isOpen: boolean;
  readonly editorProps: SxStyleProp;
  readonly editorSelectedProps: SxStyleProp;
  readonly styleMap: Map<string, SxStyleProp>;
  readonly theme: {};
  setIsOpen(isOpen: boolean): void;
  setCurrentId(id: string): void;
  setEditorProps(styles: SxStyleProp): void;
  setEditorSelectedProps(styles: SxStyleProp): void;
  setStyleMap(map: Map<string, SxStyleProp>): void;
}

