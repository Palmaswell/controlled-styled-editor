/** @jsx jsx */
import { SxStyleProp } from 'theme-ui';
import { HeadlineProps } from '.';
import { qt } from '../../context';
import { jsx } from '../../jsx';

const stylesHeadline: SxStyleProp = {
  fontFamily: 'heading',
  fontSize: `${qt('fontSizes')(6)}px`,
  color: 'sand',
  backgroundColor: 'papayawhip',
};

export const Headline: React.FC<HeadlineProps> = (props): JSX.Element => (
  <h1 sx={stylesHeadline} id={props.id} onClick={props.onClick}>
    {props.children}
  </h1>
);

Headline.displayName = 'Headline';
