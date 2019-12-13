import { SxStyleProp } from 'theme-ui';

export type JSXProps = {
  id: string;
  sx: SxStyleProp;
  styles: SxStyleProp;
} & unknown;
