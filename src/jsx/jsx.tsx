import React from 'react';
import { jsx as themeUI } from 'theme-ui';

import { ControlledStyles } from '.'
import { qt } from '../query';

import {
  mapDefaultValues,
  StylesEditorContext,
  StyleContextProps,
} from '../context';

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
        setEditorSelectedProps,
        setIsOpen,
      } = value;

      const onClick = (e: React.MouseEvent<HTMLElement>): void => {
        e.stopPropagation();
        if (props.id) {
          setCurrentId(props.id);
          setIsOpen(true);

          if (props.sx) {
            setEditorProps(props.sx);
            setEditorSelectedProps({
              ...mapDefaultValues(props.sx),
              ...(styleMap.has(props.id) && styleMap.get(props.id))
            });
          } else {
            setEditorProps({});
            setEditorSelectedProps({});
          }
        }
      };

      return themeUI(
        type,
        {
          ...props,
          sx: {
            ...(props && props.sx),
            ...(props && props.id && props.id === currentId && editorProps),
            ...(props && props.id && styleMap.has(props.id) && styleMap.get(props.id)),
            ...(props && props.id === currentId && {
                outline: `2px solid ${qt('blues')(0)}`,
              }),
              ...{
                ':hover': {
                  outline: `2px solid ${qt('blues')(0)}`,
                  cursor: 'pointer',
              },
            },
          },
          onClick,
        },
        ...children
      );
    }
  );
}
