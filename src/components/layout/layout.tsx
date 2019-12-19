/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { qt } from '../../context';

//Based on: https://react-layouts.com/sidebar
const stylesMain: SxStyleProp = {
  flexWrap: 'wrap',
  display: 'flex',
};

const stylesContent: SxStyleProp = {
  flexGrow: 10,
  flexBasis: 0,
  minWidth: 320,
  boxSizing: 'border-box',
  padding: `${qt('spaces')(4)}px ${qt('spaces')(2)}px`,
  backgroundColor: `${qt('whites')(1)}`,
};

const stylesSideBar: SxStyleProp = {
  flexGrow: 1,
  flexBasis: 256,
  minHeight: `calc(100vh - ${qt('spaces')(7)}px)`,
  p: `${qt('spaces')(4)}px`,
  borderLeft: `1px solid ${qt('grays')(3)}`,
  backgroundColor: `${qt('whites')(0)}`,
};

export const Main: React.FC = (props): JSX.Element => (
  <main sx={stylesMain}>{props.children}</main>
);

export const Content: React.FC = (props): JSX.Element => (
  <section sx={stylesContent}>{props.children}</section>
);

export const SideBar: React.FC = (props): JSX.Element => (
  <aside sx={stylesSideBar}>{props.children}</aside>
);
