import { SxStyleProp } from 'theme-ui';

export type ControlledStyles = {
  readonly id: string;
  readonly sx: SxStyleProp;
  onClick: React.MouseEventHandler<HTMLElement>;
};
