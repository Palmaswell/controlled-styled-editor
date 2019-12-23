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

export default {
  ...typography,
  spaces: [0, 3, 6, 12, 18, 24, 30, 36, 48, 72],
  letterSpacings: [0.5, 1, 1.5],
  fontSizes: [12, 18, 24, 30, 36, 48, 72],
  colors: {
    green: toRGB([92, 185, 136]),
    yellows: [toRGB([255, 199, 84]), toRGB([255, 202, 84])],
    blues: [
      toRGB([99, 173, 242]),
      toRGB([215, 236, 255]),
      toRGB([77, 118, 164]),
    ],
    reds: [toRGB([255, 92, 93]), toRGB([243, 156, 165])],
    blacks: [toRGB([0, 0, 0]), toRGB([54, 54, 54])],
    whites: [
      toRGB([255, 255, 255]),
      toRGB([247, 247, 247]),
      toRGB([244, 244, 244]),
    ],
    grays: [
      toRGB([99, 99, 99]),
      toRGB([148, 148, 148]),
      toRGB([187, 187, 187]),
      toRGB([242, 242, 242]),
    ],
    inherit: 'inherit'
  },
};
