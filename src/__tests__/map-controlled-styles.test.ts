import * as ThemeQuery from 'theme-query';
import { SxStyleProp } from 'theme-ui';

import { mapControlledStyles, flatThemeTokens } from '../context';
import theme from '../gatsby-plugin-theme-ui';

//TODO: mock theme query to use native plugin resolution
describe('mapSXStyles()', () => {
  const qt = ThemeQuery.create({ theme, styles: 'object' });
  let colorsMock: string[] | undefined;
  let fontFamiliesMock: string[] | undefined;
  beforeAll(() => {
    colorsMock = [
      'rgb(92, 185, 136)',
      'rgb(255, 199, 84)',
      'rgb(255, 202, 84)',
      'rgb(99, 173, 242)',
      'rgb(215, 236, 255)',
      'rgb(77, 118, 164)',
      'rgb(255, 92, 93)',
      'rgb(243, 156, 165)',
      'rgb(0, 0, 0)',
      'rgb(54, 54, 54)',
      'rgb(255, 255, 255)',
      'rgb(247, 247, 247)',
      'rgb(244, 244, 244)',
      'rgb(99, 99, 99)',
      'rgb(148, 148, 148)',
      'rgb(187, 187, 187)',
      'rgb(242, 242, 242)',
    ];
    fontFamiliesMock = [
      "'IBM Plex Serif', sans-serif",
      "'IBM Plex Sans', 'Helvetica'",
    ];
  });

  afterAll(() => {
    colorsMock = undefined;
    fontFamiliesMock = undefined;
  });

  it('should return null if the sx argument is not an object', () => {
    expect(
      mapControlledStyles((undefined as unknown) as SxStyleProp, theme)
    ).toStrictEqual({});
    expect(
      mapControlledStyles((null as unknown) as SxStyleProp, theme)
    ).toStrictEqual({});
    expect(
      mapControlledStyles(([] as unknown) as SxStyleProp, theme)
    ).toStrictEqual({});
    expect(
      mapControlledStyles((1 as unknown) as SxStyleProp, theme)
    ).toStrictEqual({});
    expect(
      mapControlledStyles(('' as unknown) as SxStyleProp, theme)
    ).toStrictEqual({});
  });

  it('should return an empty object on an empty sx object', () => {
    expect(mapControlledStyles({}, theme)).toStrictEqual({});
  });

  it('should return an object with a property containing all the available font sizes', () => {
    expect(
      mapControlledStyles(
        {
          fontSize: `${qt('spaces')(2)}px`,
        },
        theme
      )
    ).toStrictEqual({ fontSize: theme.fontSizes });
  });

  it('should return an object with a property containing all the available font families', () => {
    expect(
      mapControlledStyles(
        {
          fontFamily: 'heading',
        },
        theme
      )
    ).toStrictEqual({ fontFamily: fontFamiliesMock });
  });

  it('should return an object with a property containing all available colors ', () => {
    expect(
      mapControlledStyles(
        {
          color: qt('yellows')(1),
        },
        theme
      )
    ).toStrictEqual({ color: colorsMock });
  });

  it('should return an object with a property containing all available colors ', () => {
    expect(
      mapControlledStyles(
        {
          backgroundColor: qt('yellows')(0),
        },
        theme
      )
    ).toStrictEqual({ backgroundColor: colorsMock });
  });

  it('should return an object with a property containing all spaces', () => {
    expect(
      mapControlledStyles(
        {
          padding: `${qt('spaces')(2)}px`,
        },
        theme
      )
    ).toStrictEqual({ padding: theme.spaces });
  });

  it('should return a filtered theme object mapped to CSS properties', () => {
    expect(
      mapControlledStyles(
        {
          color: qt('yellows')(1),
          backgroundColor: qt('yellows')(0),
          padding: `${qt('spaces')(2)}px`,
          fontFamily: 'heading',
        },
        theme
      )
    ).toStrictEqual({
      color: colorsMock,
      backgroundColor: colorsMock,
      padding: theme.spaces,
      fontFamily: fontFamiliesMock,
    });
  });

  describe('reduceThemeTokens()', () => {
    it('should return a flatten array with theme tokens', () => {
      expect(flatThemeTokens(qt('colors') as SxStyleProp)).toEqual(colorsMock);
    });
  });
});
