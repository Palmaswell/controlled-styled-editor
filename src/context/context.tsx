import * as React from 'react';
import * as ThemeUIQuery from 'theme-query';
import theme from 'gatsby-plugin-theme-ui';


import { StyleContextProps } from '.';

export const qt = ThemeUIQuery.create({ theme, styles: 'object' });
export const StylesEditorContext = React.createContext({} as StyleContextProps);
export const StylesEditorConsumer = StylesEditorContext.Consumer;
StylesEditorContext.displayName = 'StyleEditorContext';

export const useStylesContext = () => {
  const value = React.useContext(StylesEditorContext);
  return value
}

export const StyleEditorProvider: React.FC = (
  props
): JSX.Element => {
  const [currentId, setCurrentId] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);
  const [styles, setThemeStyles] = React.useState({});

  const provider: StyleContextProps = {
    styles,
    setThemeStyles,
    currentId,
    setCurrentId,
    isOpen,
    setIsOpen,
  };

  return (
    <StylesEditorContext.Provider value={provider}>
      {props.children}
    </StylesEditorContext.Provider>
  );
};
