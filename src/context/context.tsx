import * as React from 'react';
import theme from '../theme';

import { StyleContextProps } from '.';

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
  const [editorSelectedProps, setEditorSelectedProps] = React.useState({});
  const [styleMap, setStyleMap] = React.useState(new Map());

  const provider: StyleContextProps = {
    styleMap,
    editorSelectedProps,
    setEditorSelectedProps,
    editorProps,
    setEditorProps,
    currentId,
    setCurrentId,
    isOpen,
    setIsOpen,
    setStyleMap,
    theme,
  };

  return (
    <StylesEditorContext.Provider value={provider}>
      {props.children}
    </StylesEditorContext.Provider>
  );
};
