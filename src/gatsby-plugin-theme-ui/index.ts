import { base } from '@theme-ui/presets';
import { toTheme } from '@theme-ui/typography';
import { toRGB } from 'theme-query';

const typography = toTheme({
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: 'IBM Plex Sans',
      styles: ['400', '600'],
    },
    {
      name: 'IBM Plex Serif',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['IBM Plex Sans', 'Helvetica'],
  bodyFontFamily: ['IBM Plex Serif', 'sans-serif'],
});

const theme = {
  ...base,
  ...typography,
  spaces: [0, 3, 6, 12, 18, 24, 30, 36, 48, 72],
  letterSpacings: [0.5, 1, 1.5],
  fontSizes: [0, 3, 6, 12, 18, 24, 30, 36, 48, 72],
  colors: {
    corals: [toRGB([255, 113, 99]), toRGB([229, 85, 78])],
    whites: [
      toRGB([255, 255, 255]),
      toRGB([240, 246, 246]),
      toRGB([240, 240, 240]),
      toRGB([249, 246, 241]),
      toRGB([247, 247, 247]),
    ],
    grays: [
      toRGB([222, 223, 224]),
      toRGB([159, 188, 208]),
      toRGB([142, 149, 154]),
      toRGB([89, 103, 113]),
      toRGB([77, 77, 79]),
      toRGB([56, 72, 82]),
    ],
    blacks: [toRGB([34, 34, 34]), toRGB([51, 51, 51])],
    beiges: [toRGB([250, 245, 244])],
    sand: toRGB([204, 153, 102]),
    yellows: [toRGB([223, 199, 129]), toRGB([255, 202, 84])],
  },
};

export default theme;
