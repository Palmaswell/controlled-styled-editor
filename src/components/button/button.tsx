/** @jsx jsx */
import { SxStyleProp } from 'theme-ui';
import { Button as ThemeButton } from '@theme-ui/components';
import { ButtonProps } from '.';
import { qt } from '../../context';
import { jsx } from '../../jsx';

const stylesButton: SxStyleProp = {
  padding: `${qt('spaces')(3)}px`,
  fontFamily: 'body',
  fontSize: `${qt('fontSizes')(1)}px`,
  lineHeight: 1.2,
  color: `${qt('whites')(0)}`,
  backgroundColor: `${qt('reds')(1)}`,
};

export const Button: React.FC<ButtonProps> = (props): JSX.Element => (
  <ThemeButton sx={stylesButton} id={props.id} onClick={props.onClick}>
    {props.children}
  </ThemeButton>
);

Button.displayName = 'Button';
