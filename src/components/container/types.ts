export interface ContainerProps {
  readonly id?: string;
  readonly bg?: string;
  readonly color?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}
