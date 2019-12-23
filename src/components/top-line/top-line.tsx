/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { TopLineProps } from '.';
import { qt } from '../query';

const stylesTopLine: SxStyleProp = {
  display: 'inline-block',
  fontFamily: `${qt('body')}`,
  fontSize: `${qt('fontSizes')(0)}px`,
  color: `${qt('grays')(0)}`,
  marginBottom: `${qt('spaces')(3)}px`,
};

export const TopLine: React.FC<TopLineProps> = (props): JSX.Element => (
  <small sx={stylesTopLine} id={props.id}>{props.children}</small>
);
