/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Text } from '@theme-ui/components';

import { ValueSetProps } from '.';
import { TopLine, qt } from '..';

const stylesValueSet: SxStyleProp = {
  marginBottom: `${qt('spaces')(3)}px`,
};

export const stylesLabel: SxStyleProp = {
  display: 'block',
  padding: 0,
  margin: 0,
  fontFamily: `${qt('body')}`,
  fontSize: `${qt('fontSizes')(1)}px`,
  lineHeight: 1.4,
  color: `${qt('grays')(0)}`,
};

export const ValueSet: React.FC<ValueSetProps> = (props): JSX.Element => {
  return (
    <div sx={stylesValueSet}>
      <TopLine>
        {props.topline}
      </TopLine>
      <Text sx={stylesLabel} as="span">
        {props.title}
      </Text>
    </div>
  );
};
