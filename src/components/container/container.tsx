/** @jsx jsx */
import { SxStyleProp } from 'theme-ui';
import { Container as ThemeContainer } from '@theme-ui/components';

import { ContainerProps } from '.';
import { qt } from '../../context';
import { jsx } from '../../jsx';

const stylesContainer: SxStyleProp = {
  width: 'calc(100% - 4px)',
  padding: `${qt('spaces')(6)}px`,
  margin: `${qt('spaces')(6)}px 0`,
  fontFamily: 'body',
  fontSize: `${qt('fontSizes')(6)}px`,
};

const createStylesContainer = (props: ContainerProps): SxStyleProp => {
  return {
    ...stylesContainer,
    ...(props.bg
      ? { backgroundColor: props.bg }
      : { backgroundColor: `${qt('whites')(1)}` }),
    ...(props.color ? { color: props.color } : { color: `${qt('grays')(0)}` }),
  };
};

export const Container: React.FC<ContainerProps> = (props): JSX.Element => (
  <ThemeContainer
    sx={createStylesContainer(props)}
    id={props.id}
    onClick={props.onClick}>
    {props.children}
  </ThemeContainer>
);

Container.displayName = 'Container';
