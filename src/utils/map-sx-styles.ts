import { SxStyleProp } from 'theme-ui';

import { ThemeKeys } from './types';

// tslint:disable-next-line:no-any
export function findThemeProp(key: string, theme: any) {
  switch (key) {
    case ThemeKeys.fontSize:
      console.log(theme);
       return theme && theme[key] ? theme[key] : theme.fontSizes;
    default:
      return;
  }
}

export function mapSXStyles(sx: SxStyleProp, theme: {}): SxStyleProp | null {
  if (!sx
    || Array.isArray(sx)
    || typeof sx !== 'object'
    || sx === null) {
    return null
  }
  const keys = Object.keys(sx);
  if (keys.length === 0) {
    return {};
  }
  //tslint:disable-next-line:no-any
  keys.reduce((acc: {}, key) => {
    // tslint:disable-next-line:no-console
    console.log('*****', findThemeProp(key, theme))
    acc = findThemeProp(key, theme)
    return acc;
  }, {})
  return {};
}
