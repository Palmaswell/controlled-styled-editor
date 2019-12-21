/** @jsx jsx */
import { SxStyleProp } from 'theme-ui';
import { TextProps } from '.';
import { qt } from '../query';
import { jsx } from '../../jsx';

export const stylesText: SxStyleProp = {
  padding: `${qt('spaces')(3)}px 0`,
  fontFamily: `${qt('body')}`,
  fontSize: `${qt('fontSizes')(1)}px`,
  lineHeight: 1.4,
  color: `${qt('grays')(0)}`,
};

export const Text: React.FC<TextProps> = (props): JSX.Element => (
  <p sx={stylesText} id={props.id} onClick={props.onClick}>
    {props.children}
  </p>
);

Text.displayName = 'Text';
