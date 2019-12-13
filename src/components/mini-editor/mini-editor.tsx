/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { useStylesContext, qt } from '../../context';

const stylesEditor: SxStyleProp = {
  width: '100%',
  backgroundColor: 'background',
};

const themedStyles = (isOpen: boolean): SxStyleProp => {
  const visibilityStyles = isOpen ? { opacity: 1 } : { opacity: 0 };
  return {
    ...stylesEditor,
    ...visibilityStyles,
  };
};

export const MiniEditor: React.FC = (): JSX.Element => {
  const {currentId, isOpen, styles, setThemeStyles} = useStylesContext();
  return (
    <aside sx={themedStyles(isOpen)}>
      <header>Component: {currentId}</header>
      <pre onClick={() => {
        setThemeStyles({...styles, color: 'red'})
      }}>{JSON.stringify(styles, null, 2)}</pre>
    </aside>
  );

};

MiniEditor.displayName = 'MiniEditor';
