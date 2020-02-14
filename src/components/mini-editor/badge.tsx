/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import shortid from 'shortid';

import * as A11y from '../../a11y';
import { BagdeProps } from '.';
import { qt, Score } from '..';

const stylesBadge: SxStyleProp = {
  position: 'absolute',
  bottom: `${qt('spaces')(4)}px`,
  right: `${qt('spaces')(5)}px`,
};

const stylesScoreBox: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
};

const stylesRatio: SxStyleProp = {
  paddingRight: `${qt('spaces')(3)}px`,
  borderRight: '1px solid currentColor',
  fontFamily: `${qt('body')}`,
  fontSize: `${qt('fontSizes')(5)}px`,
  lineHeight: 1,
  color: 'currentColor',
};

const stylesScore: SxStyleProp = {
  backgroundColor: qt('whites')(0),
  color: 'currentColor',
};

const stylesScoreItem: SxStyleProp = {
  display: 'block',
  paddingLeft: `${qt('spaces')(3)}px`,
  fontFamily: `${qt('body')}`,
  fontSize: `${qt('fontSizes')(1)}px`,
  color: 'currentColor',
};

const createStylesBadge = (ratio: number) => ({
  ...stylesBadge,
  ...(ratio >= A11y.ContrastRatio.aa
    ? { color: qt('green') }
    : { color: qt('reds')(1) }),
});

const ScoreItem: React.FC = props => (
  <span sx={stylesScoreItem}>{props.children}</span>
);

const scores = (level: A11y.ComplianceLevel): Score[] => {
  const levels = [];
  for (let i = level.length; i >= 0; i--) {
    levels.push({ level: level[i], id: shortid.generate() });
  }
  return levels;
};

export const Badge: React.FC<BagdeProps> = (props): JSX.Element => {
  return (
    <div sx={createStylesBadge(props.ratio)}>
      <div sx={stylesScoreBox}>
        <strong sx={stylesRatio}>{props.ratio}</strong>
        <mark sx={stylesScore}>
          {scores(A11y.getContrastLevel(props.ratio)).map(score => (
            <ScoreItem key={score.id}>{score.level}</ScoreItem>
          ))}
        </mark>
      </div>
    </div>
  );
};

Badge.displayName = 'Badge';
