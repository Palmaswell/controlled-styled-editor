/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Box as ThemeUIBox } from '@theme-ui/components';
import { qt } from '..';

const stylesBox: SxStyleProp = {
  margin: `0 0 ${qt('spaces')(8)}px 0`,
}

export const Box: React.FC = (props): JSX.Element => (
  <ThemeUIBox sx={stylesBox}>
    {props.children}
  </ThemeUIBox>
);

Box.displayName = 'Box';
