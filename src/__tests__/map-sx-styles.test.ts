import { SxStyleProp } from 'theme-ui';

import { mapSXStyles } from '../utils';
import theme from '../gatsby-plugin-theme-ui';

describe('mapSXStyles()', () => {

  it('should return null if the sx argument is not an object', () => {
    expect(mapSXStyles(undefined as unknown as SxStyleProp, theme)).toBeNull();
    expect(mapSXStyles(null as unknown as SxStyleProp, theme)).toBeNull();
    expect(mapSXStyles([] as unknown as SxStyleProp, theme)).toBeNull();
    expect(mapSXStyles(1 as unknown as SxStyleProp, theme)).toBeNull();
    expect(mapSXStyles('' as unknown as SxStyleProp, theme)).toBeNull();
  });

  it('should return an empty object on an empty sx object', () => {
    expect(mapSXStyles({}, theme)).toStrictEqual({});
  });

  it('should return all the font sizes', ()=> {
    expect(mapSXStyles({
      'fontSize': '30px',
    }, theme)).toStrictEqual(theme.fontSizes);
  })
});
