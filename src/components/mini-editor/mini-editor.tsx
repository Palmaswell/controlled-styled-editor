/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, SxStyleProp } from 'theme-ui';
import { Box, Label, Heading } from '@theme-ui/components';
import Select from 'react-select';

import * as A11y from '../../a11y';
import { ValueSet } from '.';
import { stylesSelect } from './select-styles';
import { qt } from '..';
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

const stylesLabel: SxStyleProp = {
  p: `${qt('spaces')(3)}px 0`,
  fontFamily: `${qt('body')}`,
  fontSize: `${qt('fontSizes')(0)}px`,
  color: `${qt('blacks')(1)}`,
};

const themedStyles = (isOpen: boolean): SxStyleProp => {
  const visibilityStyles = isOpen ? { opacity: 1 } : { opacity: 0 };
  return {
    ...stylesEditor,
    ...visibilityStyles,
  };
};

export const MiniEditor: React.FC = (): JSX.Element => {
  const {
    styleMap,
    currentId,
    isOpen,
    editorProps,
    setEditorProps,
    setStyleMap,
    theme,
  } = useStylesContext();

  const controlledStyles = mapControlledStyles(editorProps, theme);
  const hasStyles = styleMap.has(currentId);
  const currentStyles = hasStyles && styleMap.get(currentId);
  const a11yContrastRatio =
    currentStyles &&
    currentStyles['color'] &&
    currentStyles['backgroundColor'] &&
    A11y.contrastRatio(
      A11y.getRGBArray(currentStyles['color']) as A11y.RGB,
      A11y.getRGBArray(currentStyles['backgroundColor']) as A11y.RGB
    );
  const a11yLevel = A11y.getComplianceLevel(a11yContrastRatio);
  const contrastTitle = `Color contrast ratio ${a11yContrastRatio ?
    a11yContrastRatio : ''} - ${a11yLevel}`;

  return (
    <Fragment>
      <header>
        <Heading sx={stylesHeading} as="h3">
          Theme Properties
        </Heading>
      </header>
      <div sx={themedStyles(isOpen)}>
        <Box margin={`0 0 ${qt('spaces')(8)}px 0`}>
          {Object.entries(controlledStyles).map(([key, value], i) => {
            if (Array.isArray(value)) {
              const options = value.map(v => ({
                value: typeof v === 'number' ? `${v}px` : `${v}`,
                label: v,
              }));
              return (
                <Fragment key={`select-${i}`}>
                  <Label sx={stylesLabel}>{key}</Label>
                  <Select
                    placeholder={`Select a ${key}`}
                    styles={stylesSelect}
                    options={options}
                    isSearchable={true}
                    onChange={e => {
                      const propValue = e && (e as { value: string }).value;
                      if (propValue) {
                        setEditorProps({ ...editorProps, [key]: propValue });
                        if (hasStyles) {
                          const cssProp = styleMap.get(currentId);
                          setStyleMap(
                            new Map(
                              styleMap.set(currentId, {
                                ...cssProp,
                                [key]: propValue,
                              })
                            )
                          );
                        } else {
                          setStyleMap(
                            new Map(
                              styleMap.set(currentId, { [key]: propValue })
                            )
                          );
                        }
                      }
                    }}
                  />
                </Fragment>
              );
            }
            return null;
          })}
        </Box>
        <Box margin={`0 0 ${qt('spaces')(3)}px 0`}>
          <Heading sx={stylesHeading} as="h3">
            Accessibility
          </Heading>
          <ValueSet
            topline="Pick a color and background color"
            title={contrastTitle}
          />
        </Box>
      </div>
    </Fragment>
  );
};

MiniEditor.displayName = 'MiniEditor';
