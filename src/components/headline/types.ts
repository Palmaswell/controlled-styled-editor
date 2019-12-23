export interface HeadlineProps {
  readonly tag: HeadlineTag;
  readonly color?: string;
  readonly id?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export type HeadlineTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
