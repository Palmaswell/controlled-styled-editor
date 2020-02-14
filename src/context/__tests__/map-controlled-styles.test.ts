import * as ThemeQuery from 'theme-query';
import { SxStyleProp } from 'theme-ui';

import { mapControlledStyles, flatThemeTokens, getDefaultValue, mapDefaultValues } from '..';
import theme from '../../theme';

describe('Map Styles', () => {
  const qt = ThemeQuery.create({ theme, styles: 'object' });
  let colorsMock: string[] | undefined;
  let fontFamiliesMock: string[];
  let cssRuleMock: SxStyleProp;

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
      'currentColor',
    ];
    fontFamiliesMock = [
      "'IBM Plex Serif', sans-serif",
      "'IBM Plex Sans', 'Helvetica'",
    ];
    cssRuleMock = {
      padding: `${qt('spaces')(2)}px`,
      margin: `${qt('spaces')(5)}px`,
      color: qt('yellows')(1),
      backgroundColor: qt('yellows')(0),
      fontFamily: qt('heading'),
      fontSize: `${qt('fontSizes')(6)}px`,
    };
  });

  afterAll(() => {
    colorsMock = undefined;
    fontFamiliesMock = [''];
    cssRuleMock = {};
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
    expect(mapControlledStyles(cssRuleMock, theme)).toStrictEqual({
      padding: theme.spaces,
      margin: theme.spaces,
      color: colorsMock,
      backgroundColor: colorsMock,
      fontFamily: fontFamiliesMock,
      fontSize: theme.fontSizes,
    });
  });

  describe('reduceThemeTokens()', () => {
    it('should return a flatten array with theme tokens', () => {
      expect(flatThemeTokens(qt('colors') as SxStyleProp)).toMatchSnapshot();
    });
  });

  describe('getDefaultValue()', () => {
    it('should return an empty string if no valid property is found', () => {
      expect(getDefaultValue('pointerEvents', cssRuleMock)).toBe('');
    });

    it('should return a rgb color value', () => {
      expect(getDefaultValue('color', cssRuleMock)).toBe(qt('yellows')(1));
      expect(getDefaultValue('backgroundColor', cssRuleMock)).toBe(
        qt('yellows')(0)
      );
    });

    it('should return a sanitized space scale value', () => {
      expect(getDefaultValue('padding', cssRuleMock)).toBe(
        qt('spaces')(2).toString()
      );
      expect(getDefaultValue('margin', cssRuleMock)).toBe(
        qt('spaces')(5).toString()
      );
      expect(
        getDefaultValue('padding', {
          padding: `${qt('spaces')(1)}px ${qt('spaces')(1)}px ${qt('spaces')(1)}px ${qt('spaces')(1)}px`,
        })
      ).toBe(
        `${qt('spaces')(1)} ${qt('spaces')(1)} ${qt('spaces')(1)} ${qt('spaces')(1)}`
      );
      expect(
        getDefaultValue('padding', {
          padding: `${qt('spaces')(6)}px ${qt('spaces')(0)}px ${qt('spaces')(2)}px`,
        })
      ).toBe(`${qt('spaces')(6)} ${qt('spaces')(0)} ${qt('spaces')(2)}`);
      expect(
        getDefaultValue('margin', {
          margin: `${qt('spaces')(3)}px ${qt('spaces')(5)}px`,
        })
      ).toBe(`${qt('spaces')(3)} ${qt('spaces')(5)}`);
    });

    it('should return a font family string', () => {
      expect(getDefaultValue('fontFamily', cssRuleMock)).toBe(fontFamiliesMock[1]);
    });

    it('should return a sanitized font size scale value', () => {
      expect(getDefaultValue('fontSize', cssRuleMock)).toBe(qt('fontSizes')(6).toString());
    });
  });

  describe('mapDefaultValues()', () => {
    it('should skip unknown properties', () => {
      expect(mapDefaultValues({ pointerEvents: 'all' })).toStrictEqual({});
      expect(mapDefaultValues({ backfaceVisibility: 'visible' })).toStrictEqual({});
    });

    it('should return a style object contining editor default values', () => {
      expect(mapDefaultValues(cssRuleMock)).toStrictEqual({
        padding: qt('spaces')(2).toString(),
        margin: qt('spaces')(5).toString(),
        color: qt('yellows')(1),
        backgroundColor: qt('yellows')(0),
        fontFamily: qt('heading'),
        fontSize: qt('fontSizes')(6).toString(),
      });
    });
  })

});
