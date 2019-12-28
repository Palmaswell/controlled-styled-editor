/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, SxStyleProp } from 'theme-ui';
import { Heading } from '@theme-ui/components';

import * as A11y from '../../a11y';
import { EditorSelect, ValueSet, Box, SelectOptionProps } from '.';
import { qt, Badge } from '..';
import { mapControlledStyles, useStylesContext } from '../../context';

const stylesEditor: SxStyleProp = {
  p: `${qt('spaces')(2)}px`,
};

const stylesHeading: SxStyleProp = {
  p: `${qt('spaces')(6)}px 0`,
  fontSize: `${qt('fontSizes')(2)}px`,
  fontFamily: `${qt('heading')}`,
  color: `${qt('blacks')(1)}`,
};

const createStylesMiniEditor = (isOpen: boolean): SxStyleProp => ({
  ...stylesEditor,
  ...(isOpen ? { opacity: 1 } : { opacity: 0 }),
});

export const MiniEditor: React.FC = (): JSX.Element => {
  const {
    styleMap,
    currentId,
    isOpen,
    editorProps,
    setEditorSelectedProps,
    editorSelectedProps,
    setEditorProps,
    setStyleMap,
    theme,
  } = useStylesContext();

  const controlledStyles = mapControlledStyles(editorProps, theme);
  const hasStyles = styleMap.has(currentId);
  const currentStyles = hasStyles && styleMap.get(currentId);

  const handleChange = (e: SelectOptionProps, key: string): void => {
    const propValue = e && e.value;
    if (propValue) {
      setEditorProps({ ...editorProps, [key]: propValue });
      setEditorSelectedProps({
        ...editorProps,
        ...currentStyles,
        [key]: propValue,
      });

      hasStyles
        ? setStyleMap(
            new Map(
              styleMap.set(currentId, {
                ...styleMap.get(currentId),
                [key]: propValue,
              })
            )
          )
        : setStyleMap(new Map(styleMap.set(currentId, { [key]: propValue })));
    }
  };

  const getContrastRatio = (props: SxStyleProp): number => (
    props['backgroundColor'] &&
      props['color'] &&
      A11y.contrastRatio(
        A11y.getRGBArray(props['color']) as A11y.RGB,
        A11y.getRGBArray(props['backgroundColor']) as A11y.RGB
      )
  );

  const createContrastTitle = (props: SxStyleProp): string => {
    const ratio = getContrastRatio(props);
    return `Color contrast ratio: ${ratio} - ${A11y.getContrastLevel(ratio)}`;
  };

  return (
    <Fragment>
      <header>
        <Heading sx={stylesHeading} as="h3">
          Theme Properties
        </Heading>
      </header>
      <div sx={createStylesMiniEditor(isOpen)}>
        <Box>
          {Object.entries(controlledStyles).map(([key, value]) => {
            if (Array.isArray(value)) {
              const options = value.map(v => ({
                value: typeof v === 'number' ? `${v}px` : `${v}`,
                label: typeof v === 'number' ? `${v}px` : `${v}`,
              }));
              const currentValue = {
                value: editorSelectedProps[key],
                label: editorSelectedProps[key],
              };
              return (
                <EditorSelect
                  key={`${currentId}-${key}`}
                  label={key}
                  currentValue={currentValue}
                  options={options}
                  onChange={e => handleChange(e as SelectOptionProps, key)}
                />
              );
            }
            return null;
          })}
        </Box>
        {editorSelectedProps['backgroundColor'] && editorSelectedProps['color'] && (
          <Box>
            <Heading sx={stylesHeading} as="h3">
              Accessibility
            </Heading>
            <ValueSet
              topline="Pick a color and background color"
              title={createContrastTitle(editorSelectedProps)}
            />
          </Box>
        )}
        <Badge ratio={getContrastRatio(editorSelectedProps)} />
      </div>
    </Fragment>
  );
};

MiniEditor.displayName = 'MiniEditor';
