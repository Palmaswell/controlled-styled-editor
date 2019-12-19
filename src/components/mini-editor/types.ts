import { SxStyleProp } from 'theme-ui';
import { StyleContextProps } from '../../context';

export interface MiniEditorProps {
  value: StyleContextProps;
}

export interface ThemeProp {
  [key: string]: ThemeToken;
}

export enum ThemeKey {
  backgroundColor = 'backgroundColor',
  color = 'color',
  fontSize = 'fontSize',
  fontFamily = 'fontFamily',
  padding = 'padding',
}

export type ThemeToken = string | number | SxStyleProp;
