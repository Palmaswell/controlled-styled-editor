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
  margin = 'margin',
}

export type ThemeToken = string | number | SxStyleProp;
export type SelectOptionProps = { [key: string]: string };

export interface ValueSetProps {
  readonly topline: string;
  readonly title: string;
  readonly id?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}


