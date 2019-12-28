import { SxStyleProp } from 'theme-ui';
import { StyleContextProps } from '../../context';
import { OptionsType, OptionTypeBase } from 'react-select';

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

export interface EditorSelectProps {
  label: string;
  currentValue: SelectOptionProps;
  options: OptionsType<OptionTypeBase>;
  onChange: (value: SelectOptionProps, key: string) => void;
}

export interface BagdeProps {
  ratio: number;
}

export interface Score {
  level: string;
  id: string;
}
