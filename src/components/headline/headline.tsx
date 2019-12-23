/** @jsx jsx */
import { SxStyleProp } from 'theme-ui';
import { Heading } from '@theme-ui/components';
import { HeadlineProps, HeadlineTag } from '.';
import { qt } from '../query';
import { jsx } from '../../jsx';

const stylesHeadline: SxStyleProp = {
  padding: `0 0 ${qt('spaces')(3)}px 0`,
  fontFamily: `${qt('heading')}`,
  fontSize: `${qt('fontSizes')(6)}px`,
  color: 'inherit'
};

const createFontSize = (tag: HeadlineTag): SxStyleProp => {
  switch (tag) {
    case 'h1':
      return {
        fontSize: `${qt('fontSizes')(6)}px`,
      };
    case 'h2':
      return {
        fontSize: `${qt('fontSizes')(5)}px`,
      };
    case 'h3':
      return {
        fontSize: `${qt('fontSizes')(4)}px`,
      };
    default:
      return {
        fontSize: `${qt('fontSizes')(1)}px`,
      };
  }
};

const createStylesHeadline = (tag: HeadlineTag): SxStyleProp => {
  return {
    ...stylesHeadline,
    ...createFontSize(tag),
  };
};

export const Headline: React.FC<HeadlineProps> = (props): JSX.Element => (
  <Heading sx={createStylesHeadline(props.tag)} id={props.id} as={props.tag}>
    {props.children}
  </Heading>
);

Headline.displayName = 'Headline';
