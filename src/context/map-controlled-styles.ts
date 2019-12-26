import { SxStyleProp } from 'theme-ui';

import { ThemeKey, ThemeProp, ThemeToken } from '../components/mini-editor';
import { qt } from '../components';

export function mapControlledStyles(
  sx: SxStyleProp,
  theme: SxStyleProp
): SxStyleProp | {} {
  if (!sx) {
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
  if (!theme) {
    return {};
  }
  switch (key) {
    case ThemeKey.padding:
      return { padding: flatThemeTokens(qt('spaces')('all')) };
    case ThemeKey.margin:
      return { margin: flatThemeTokens(qt('spaces')('all')) };
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

export function mapDefaultValues(sx: SxStyleProp): SxStyleProp {
  const keys = Object.keys(sx);
  if (!sx || keys.length === 0) {
    return {};
  }
  return keys.reduce((acc: SxStyleProp, key) => {
    const value = getDefaultValue(key, sx);
    return {
      ...acc,
      ...(value ? { [key]: value } : {}),
    };
  }, {});
}

// TODO: extend CSS styles
export function getDefaultValue(key: string, sx: SxStyleProp): string {
  switch (key) {
    case ThemeKey.padding:
      return removeUnit(sx['padding']);
    case ThemeKey.margin:
      return removeUnit(sx['margin']);
    case ThemeKey.backgroundColor:
      return sx['backgroundColor'];
    case ThemeKey.color:
      return sx['color'];
    case ThemeKey.fontFamily:
      return sx['fontFamily'];
    case ThemeKey.fontSize:
      return removeUnit(sx['fontSize']);
    default:
      return '';
  }
}

export function removeUnit(str: string): string {
  if (!str) {
    return '';
  }

  if (str.search(/\s/g)) {
    return str
      .split(' ')
      .map((val: string) => {
        const v = val.match(/[0-9]/g);
        return v ? v.join('') : '';
      })
      .join(' ');
  }

  const value = str.match(/[0-9]/g);
  return value ? value.join('') : str.trim();
}
