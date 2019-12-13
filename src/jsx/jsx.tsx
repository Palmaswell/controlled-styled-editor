import React from 'react';
import { jsx as themeUI } from 'theme-ui';

import { JSXProps } from '.';
import { StylesEditorContext, StyleContextProps } from '../context';

function parseProps(props: JSXProps) {
  return {
    ...props,
    sx: {
      ...props.sx,
    }
  };
}

export function jsx(
  type: React.ElementType,
  props: JSXProps,
  ...children: React.ReactNode[]
) {
  return themeUI(
    StylesEditorContext.Consumer,
    {} as React.ConsumerProps<{}>,
    (value: StyleContextProps) => {
      const onClick = (e: React.MouseEvent<HTMLElement>): void => {
        e.stopPropagation();
        if (props.id
          && props.id !== value.currentId
          && typeof props.id === 'string'
          && props.id.length > 0) {
          value.setCurrentId(props.id);
          value.setIsOpen(true);

          props.sx && typeof props.sx === 'object'
            ? value.setThemeStyles(props.sx)
            : value.setThemeStyles({});
        }
      };

      return themeUI(type, {...props, sx: {...value.styles}, onClick}, ...children);
    }
  );
}
