import { SxStyleProp } from 'theme-ui';

import { ThemeKey, ThemeProp, ThemeToken } from '../components/mini-editor';
import { qt } from '.';

export function mapControlledStyles(
  sx: SxStyleProp,
  theme: SxStyleProp
): SxStyleProp | {} {
  if (!sx || Array.isArray(sx) || typeof sx !== 'object' || sx === null) {
    return {};
  }
  const keys = Object.keys(sx);
  if (keys.length === 0) {
    return {};
  }
  return keys.reduce(
    (acc: SxStyleProp, key) => ({ ...acc, ...findThemeProp(key, theme) }),
    {}
  );
}

// TODO: extend CSS styles
export function findThemeProp(key: string, theme: SxStyleProp): ThemeProp | {} {
  if (!theme && typeof theme !== 'object') {
    return {};
  }
  switch (key) {
    case ThemeKey.padding:
      return { padding: flatThemeTokens(qt('spaces')('all')) };
    case ThemeKey.backgroundColor:
      return { backgroundColor: flatThemeTokens(qt('colors')) };
    case ThemeKey.color:
      return { color: flatThemeTokens(qt('colors')) };
    case ThemeKey.fontFamily:
      return { fontFamily: flatThemeTokens(qt('fonts')) };
    case ThemeKey.fontSize:
      return { fontSize: flatThemeTokens(qt('fontSizes')('all')) };
    default:
      return {};
  }
}

export function flatThemeTokens(
  theme: SxStyleProp | SxStyleProp[]
): ThemeToken[] {
  if (theme && Array.isArray(theme)) {
    return theme;
  }
  if (typeof theme === 'object' && theme !== null) {
    return Object.entries(theme).reduce(
      (acc: ThemeToken[], [_, v]) =>
        Array.isArray(v) ? [...acc, ...v] : [...acc, v],
      []
    );
  }
  return [];
}
