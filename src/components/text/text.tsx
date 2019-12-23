/** @jsx jsx */
import { SxStyleProp } from 'theme-ui';
import { Text as ThemeUIText } from '@theme-ui/components';
import { TextProps } from '.';
import { qt } from '../query';
import { jsx } from '../../jsx';

export const stylesText: SxStyleProp = {
  padding: `${qt('spaces')(3)}px 0`,
  margin: 0,
  fontFamily: `${qt('body')}`,
  fontSize: `${qt('fontSizes')(1)}px`,
  lineHeight: 1.4,
  color: `${qt('grays')(0)}`,
};

export const Text: React.FC<TextProps> = (props): JSX.Element => (
  <ThemeUIText sx={stylesText} id={props.id}>
    {props.children}
  </ThemeUIText>
);

Text.displayName = 'Text';
