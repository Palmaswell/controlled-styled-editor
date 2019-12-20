/** @jsx jsx */
import { SxStyleProp } from 'theme-ui';
import { Heading } from '@theme-ui/components';
import { HeadlineProps } from '.';
import { qt } from '../query';
import { jsx } from '../../jsx';

const stylesHeadline: SxStyleProp = {
  padding: `0 0 ${qt('spaces')(3)}px 0`,
  fontFamily: 'heading',
  fontSize: `${qt('fontSizes')(6)}px`,
  lineHeight: 1.2,
  color: `${qt('grays')(0)}`,
  backgroundColor: 'transparent',
};

export const Headline: React.FC<HeadlineProps> = (props): JSX.Element => (
  <Heading sx={stylesHeadline} id={props.id} onClick={props.onClick}>
    {props.children}
  </Heading>
);

Headline.displayName = 'Headline';
