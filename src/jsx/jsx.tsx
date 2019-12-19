import React from 'react';
import { jsx as themeUI } from 'theme-ui';

import { ControlledStyles } from '.';
import { StylesEditorContext, StyleContextProps, qt } from '../context';

export function jsx(
  type: React.ElementType,
  props: ControlledStyles,
  ...children: React.ReactNode[]
) {
  return themeUI(
    StylesEditorContext.Consumer,
    {} as React.ConsumerProps<{}>,
    (value: StyleContextProps) => {
      const {
        styleMap,
        currentId,
        editorProps,
        setCurrentId,
        setEditorProps,
        setIsOpen,
      } = value;
      const currentElement = props.id === currentId;

      const onClick = (e: React.MouseEvent<HTMLElement>): void => {
        e.stopPropagation();
        if (props.id) {
          setCurrentId(props.id);
          setIsOpen(true);
          props.sx ? setEditorProps(props.sx) : setEditorProps({});
        }
      };

      return themeUI(
        type,
        {
          ...props,
          sx: {
            ...props.sx,
            ...(props.id && currentElement && editorProps),
            ...(props.id && styleMap.has(props.id) && styleMap.get(props.id)),
            ...(currentElement && {
              outline: `2px solid ${qt('blues')(0)}`,
            }),
            ...{
              ':hover': {
                outline: `2px solid ${qt('blues')(0)}`,
                cursor: 'pointer'
              },
            }
          },
          onClick,
        },
        ...children
      );
    }
  );
}
