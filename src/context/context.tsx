import * as React from 'react';
import * as ThemeQuery from 'theme-query';
import theme from '../gatsby-plugin-theme-ui';

import { StyleContextProps } from '.';

export const qt = ThemeQuery.create({ theme, styles: 'object' });
export const StylesEditorContext = React.createContext({} as StyleContextProps);
export const StylesEditorConsumer = StylesEditorContext.Consumer;
StylesEditorContext.displayName = 'StyleEditorContext';

export const useStylesContext = () => {
  const value = React.useContext(StylesEditorContext);
  return value;
};

export const StyleEditorProvider: React.FC = (props): JSX.Element => {
  const [currentId, setCurrentId] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);
  const [editorProps, setEditorProps] = React.useState({});
  const [selectInputValue, setSelectInputValue] = React.useState('');
  const [styleMap, setStyleMap] = React.useState(new Map());

  const provider: StyleContextProps = {
    styleMap,
    selectInputValue,
    editorProps,
    setEditorProps,
    currentId,
    setCurrentId,
    isOpen,
    setIsOpen,
    setSelectInputValue,
    setStyleMap
  };

  return (
    <StylesEditorContext.Provider value={provider}>
      {props.children}
    </StylesEditorContext.Provider>
  );
};
