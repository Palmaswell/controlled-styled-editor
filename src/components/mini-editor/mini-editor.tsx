/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, SxStyleProp } from 'theme-ui';
import { Label, Heading } from '@theme-ui/components';
import Select from 'react-select';

import { stylesSelect } from './select-styles';
//TODO: implement jest mock to use npm module and not local theme
import theme from '../../gatsby-plugin-theme-ui';
import { mapControlledStyles, useStylesContext, qt } from '../../context';

const stylesEditor: SxStyleProp = {
  p: `${qt('spaces')(2)}px`,
};

const stylesHeading: SxStyleProp = {
  p: `${qt('spaces')(6)}px 0`,
  fontSize: `${qt('fontSizes')(2)}px`,
};

const stylesLabel: SxStyleProp = {
  p: `${qt('spaces')(3)}px 0`,
  fontFamily: `${qt('body')}`,
  color: `${qt('grays')(1)}`,
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
  } = useStylesContext();
  const controlledStyles = mapControlledStyles(editorProps, theme);

  return (
    <Fragment>
      <header>
        <Heading sx={stylesHeading} as="h3">
          Selected: {currentId}
        </Heading>
      </header>
      <div sx={themedStyles(isOpen)}>
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
                      if (styleMap.has(currentId)) {
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
                          new Map(styleMap.set(currentId, { [key]: propValue }))
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
      </div>
    </Fragment>
  );
};

MiniEditor.displayName = 'MiniEditor';
